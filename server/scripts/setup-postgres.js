/**
 * Automated PostgreSQL Database Setup Script
 * 
 * This script automatically:
 * 1. Generates app-specific database credentials
 * 2. Creates PostgreSQL user if missing
 * 3. Creates database if missing
 * 4. Grants privileges to the app user
 * 5. Runs schema.sql to create all tables, enums, triggers, etc.
 * 6. Updates .env file with the generated credentials
 * 
 * Usage: node scripts/setup-postgres.js
 * 
 * Requirements:
 * - PostgreSQL must be installed and running
 * - Admin credentials (default: postgres/postgres) or set POSTGRES_ADMIN_USER/POSTGRES_ADMIN_PASSWORD
 */

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Project name derived from directory or package.json
const PROJECT_NAME = 'emdad_3pl';
const DB_NAME = PROJECT_NAME;
const DB_USER = `${PROJECT_NAME}_app`;
const DB_PASSWORD = crypto.randomBytes(16).toString('hex'); // Generate secure random password

// Default admin credentials (can be overridden via env vars)
const ADMIN_USER = process.env.POSTGRES_ADMIN_USER || 'postgres';
const ADMIN_PASSWORD = process.env.POSTGRES_ADMIN_PASSWORD || 'postgres';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '5432';

// Admin connection string (connects to 'postgres' database)
const ADMIN_URL = `postgresql://${ADMIN_USER}:${ADMIN_PASSWORD}@${DB_HOST}:${DB_PORT}/postgres`;

// App connection string (will be written to .env)
const APP_DATABASE_URL = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public`;

async function setupDatabase() {
  const adminClient = new Client({ connectionString: ADMIN_URL });
  
  try {
    console.log('🔌 Connecting to PostgreSQL as admin...');
    await adminClient.connect();
    console.log('✅ Connected to PostgreSQL');

    // Step 1: Create user if it doesn't exist
    console.log(`\n👤 Checking/Creating database user: ${DB_USER}...`);
    const userCheck = await adminClient.query(
      `SELECT 1 FROM pg_user WHERE usename = $1`,
      [DB_USER]
    );

    if (userCheck.rows.length === 0) {
      console.log(`   Creating user: ${DB_USER}...`);
      // Escape password for SQL (CREATE USER doesn't support parameterized queries)
      const escapedPassword = DB_PASSWORD.replace(/'/g, "''");
      await adminClient.query(
        `CREATE USER ${DB_USER} WITH PASSWORD '${escapedPassword}'`
      );
      console.log(`   ✅ User ${DB_USER} created`);
    } else {
      console.log(`   ✅ User ${DB_USER} already exists`);
      // Update password to ensure it matches (ALTER USER doesn't support parameterized queries)
      const escapedPassword = DB_PASSWORD.replace(/'/g, "''");
      await adminClient.query(
        `ALTER USER ${DB_USER} WITH PASSWORD '${escapedPassword}'`
      );
      console.log(`   ✅ User ${DB_USER} password updated`);
    }

    // Step 2: Create database if it doesn't exist
    console.log(`\n📦 Checking/Creating database: ${DB_NAME}...`);
    const dbCheck = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [DB_NAME]
    );

    if (dbCheck.rows.length === 0) {
      console.log(`   Creating database: ${DB_NAME}...`);
      await adminClient.query(`CREATE DATABASE ${DB_NAME}`);
      console.log(`   ✅ Database ${DB_NAME} created`);
    } else {
      console.log(`   ✅ Database ${DB_NAME} already exists`);
    }

    // Step 3: Grant privileges
    console.log(`\n🔐 Granting privileges to ${DB_USER}...`);
    await adminClient.query(`GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER}`);
    
    // Connect to the target database to grant schema privileges
    await adminClient.end();
    const grantClient = new Client({
      connectionString: `postgresql://${ADMIN_USER}:${ADMIN_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    });
    await grantClient.connect();
    
    // Grant schema privileges
    await grantClient.query(`GRANT ALL ON SCHEMA public TO ${DB_USER}`);
    await grantClient.query(`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO ${DB_USER}`);
    await grantClient.query(`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO ${DB_USER}`);
    console.log(`   ✅ Privileges granted`);
    
    await grantClient.end();

    // Step 4: Connect as app user and run schema
    console.log(`\n🔌 Connecting to database as ${DB_USER}...`);
    const appClient = new Client({ connectionString: APP_DATABASE_URL });
    await appClient.connect();
    console.log(`   ✅ Connected to ${DB_NAME}`);

    // Step 5: Read and execute schema.sql
    const schemaPath = path.join(__dirname, '../../context/schema.sql');
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found at: ${schemaPath}`);
    }

    console.log(`\n📄 Reading schema.sql from ${schemaPath}...`);
    let schemaSQL = fs.readFileSync(schemaPath, 'utf8');
    
    // Remove any non-SQL content (XML/HTML tags, tool call markers, etc.)
    // Filter out lines that are clearly not SQL
    schemaSQL = schemaSQL
      .split('\n')
      .filter(line => {
        const trimmed = line.trim();
        // Remove specific problematic patterns we've identified
        if (trimmed.includes('</think>') || 
            trimmed.includes('</redacted') ||
            trimmed.includes('Reordering') ||
            trimmed.includes('tool-call') ||
            trimmed.match(/^<tool/) ||
            trimmed.match(/^<\/tool/) ||
            trimmed.match(/^Read\s+[A-Z]/) || // Tool call "Read" statements (e.g., "Read file")
            trimmed.match(/^Read$/) || // Standalone "Read"
            (trimmed.startsWith('<') && trimmed.endsWith('>') && trimmed.length < 50)) { // Short XML tags
          return false;
        }
        return true; // Keep all other lines (SQL, comments, empty lines)
      })
      .join('\n');

    // Check if schema has already been applied (optional - comment out if you want to rerun)
    const tablesCheck = await appClient.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'client'
    `);

    if (tablesCheck.rows.length > 0) {
      console.log('   ⚠️  Schema appears to already be applied (client table exists)');
      console.log('   💡 To reapply schema, drop and recreate the database first');
    } else {
      console.log('   🚀 Executing schema.sql...');
      // Execute the entire schema file as one query
      // PostgreSQL supports multiple statements separated by semicolons
      try {
        await appClient.query(schemaSQL);
        console.log('   ✅ Schema executed successfully');
      } catch (err) {
        // Check if it's a "already exists" error (idempotency)
        if (err.message.includes('already exists') || err.message.includes('duplicate')) {
          console.log('   ⚠️  Some objects already exist, but continuing...');
        } else {
          console.error('   ❌ Error executing schema:', err.message);
          console.error('   💡 This might be due to existing objects. Try: npm run db:reset');
          throw err;
        }
      }
    }

    await appClient.end();

    // Step 6: Update .env file
    console.log(`\n📝 Updating .env file...`);
    const envPath = path.join(__dirname, '../.env');
    const envLocalPath = path.join(__dirname, '../.env.local');
    
    // Prefer .env.local if it exists, otherwise use .env
    const targetEnvPath = fs.existsSync(envLocalPath) ? envLocalPath : envPath;
    
    let envContent = '';
    if (fs.existsSync(targetEnvPath)) {
      envContent = fs.readFileSync(targetEnvPath, 'utf8');
    }

    // Update or add database configuration
    const envLines = envContent.split('\n');
    const newEnvLines = [];
    let foundDbConfig = false;

    for (const line of envLines) {
      if (line.startsWith('DATABASE_URL=') || 
          line.startsWith('POSTGRES_ADMIN_USER=') ||
          line.startsWith('POSTGRES_ADMIN_PASSWORD=') ||
          line.startsWith('DB_HOST=') ||
          line.startsWith('DB_PORT=') ||
          line.startsWith('DB_NAME=') ||
          line.startsWith('DB_USER=') ||
          line.startsWith('DB_PASSWORD=')) {
        if (!foundDbConfig) {
          // Add new database config section
          newEnvLines.push('# Database Configuration (Auto-generated by setup-postgres.js)');
          newEnvLines.push(`POSTGRES_ADMIN_USER=${ADMIN_USER}`);
          newEnvLines.push(`POSTGRES_ADMIN_PASSWORD=${ADMIN_PASSWORD}`);
          newEnvLines.push(`DB_HOST=${DB_HOST}`);
          newEnvLines.push(`DB_PORT=${DB_PORT}`);
          newEnvLines.push(`DB_NAME=${DB_NAME}`);
          newEnvLines.push(`DB_USER=${DB_USER}`);
          newEnvLines.push(`DB_PASSWORD=${DB_PASSWORD}`);
          newEnvLines.push(`DATABASE_URL="${APP_DATABASE_URL}"`);
          foundDbConfig = true;
        }
        // Skip old database config lines
        continue;
      }
      newEnvLines.push(line);
    }

    if (!foundDbConfig) {
      // Add database config at the end
      if (newEnvLines.length > 0 && !newEnvLines[newEnvLines.length - 1].trim() === '') {
        newEnvLines.push('');
      }
      newEnvLines.push('# Database Configuration (Auto-generated by setup-postgres.js)');
      newEnvLines.push(`POSTGRES_ADMIN_USER=${ADMIN_USER}`);
      newEnvLines.push(`POSTGRES_ADMIN_PASSWORD=${ADMIN_PASSWORD}`);
      newEnvLines.push(`DB_HOST=${DB_HOST}`);
      newEnvLines.push(`DB_PORT=${DB_PORT}`);
      newEnvLines.push(`DB_NAME=${DB_NAME}`);
      newEnvLines.push(`DB_USER=${DB_USER}`);
      newEnvLines.push(`DB_PASSWORD=${DB_PASSWORD}`);
      newEnvLines.push(`DATABASE_URL="${APP_DATABASE_URL}"`);
    }

    fs.writeFileSync(targetEnvPath, newEnvLines.join('\n'), 'utf8');
    console.log(`   ✅ Updated ${path.basename(targetEnvPath)}`);

    console.log('\n✅ Database setup complete!');
    console.log('\n📋 Database Credentials:');
    console.log(`   Database Name: ${DB_NAME}`);
    console.log(`   Database User: ${DB_USER}`);
    console.log(`   Database Password: ${DB_PASSWORD}`);
    console.log(`   Host: ${DB_HOST}:${DB_PORT}`);
    console.log(`\n💡 Credentials have been saved to ${path.basename(targetEnvPath)}`);
    console.log(`\n🚀 Next steps:`);
    console.log(`   1. Generate Prisma client: npm run prisma:generate`);
    console.log(`   2. Seed database (optional): npm run db:seed`);
    console.log(`   3. Start server: npm run start:dev`);

  } catch (error) {
    console.error('\n❌ Error setting up database:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('\n💡 Make sure PostgreSQL is running on', `${DB_HOST}:${DB_PORT}`);
    } else if (error.code === '28P01') {
      console.error('\n💡 Check your PostgreSQL admin credentials (POSTGRES_ADMIN_USER/POSTGRES_ADMIN_PASSWORD)');
    }
    process.exit(1);
  }
}

setupDatabase();

