/**
 * Database Reset Script
 * 
 * Drops and recreates the database, then runs schema.sql
 * 
 * Usage: node scripts/reset-database.js
 * 
 * WARNING: This will delete all data in the database!
 */

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const ADMIN_USER = process.env.POSTGRES_ADMIN_USER || process.env.DB_USER || 'postgres';
const ADMIN_PASSWORD = process.env.POSTGRES_ADMIN_PASSWORD || process.env.DB_PASSWORD || 'postgres';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '5432';
const DB_NAME = process.env.DB_NAME || 'emdad_3pl';
const DB_USER = process.env.DB_USER || `${DB_NAME}_app`;

const ADMIN_URL = `postgresql://${ADMIN_USER}:${ADMIN_PASSWORD}@${DB_HOST}:${DB_PORT}/postgres`;

async function resetDatabase() {
  const adminClient = new Client({ connectionString: ADMIN_URL });
  
  try {
    console.log('🔌 Connecting to PostgreSQL as admin...');
    await adminClient.connect();
    console.log('✅ Connected to PostgreSQL');

    // Terminate all connections to the database
    console.log(`\n🔌 Terminating connections to ${DB_NAME}...`);
    await adminClient.query(`
      SELECT pg_terminate_backend(pg_stat_activity.pid)
      FROM pg_stat_activity
      WHERE pg_stat_activity.datname = $1
      AND pid <> pg_backend_pid()
    `, [DB_NAME]);

    // Drop database
    console.log(`\n🗑️  Dropping database: ${DB_NAME}...`);
    await adminClient.query(`DROP DATABASE IF EXISTS ${DB_NAME}`);
    console.log(`   ✅ Database ${DB_NAME} dropped`);

    // Recreate database
    console.log(`\n📦 Creating database: ${DB_NAME}...`);
    await adminClient.query(`CREATE DATABASE ${DB_NAME}`);
    console.log(`   ✅ Database ${DB_NAME} created`);

    // Grant privileges
    console.log(`\n🔐 Granting privileges to ${DB_USER}...`);
    await adminClient.query(`GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER}`);
    
    await adminClient.end();

    // Connect to the target database and grant schema privileges
    const grantClient = new Client({
      connectionString: `postgresql://${ADMIN_USER}:${ADMIN_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    });
    await grantClient.connect();
    
    await grantClient.query(`GRANT ALL ON SCHEMA public TO ${DB_USER}`);
    await grantClient.query(`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO ${DB_USER}`);
    await grantClient.query(`ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO ${DB_USER}`);
    
    await grantClient.end();

    // Run schema - use admin credentials to connect
    const appUrl = `postgresql://${ADMIN_USER}:${ADMIN_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    const appClient = new Client({ connectionString: appUrl });
    await appClient.connect();
    console.log(`\n🔌 Connected to ${DB_NAME} as ${ADMIN_USER}`);

    const schemaPath = path.join(__dirname, '../../context/schema.sql');
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found at: ${schemaPath}`);
    }

    console.log(`\n📄 Reading schema.sql...`);
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

    console.log('   🚀 Executing schema.sql...');
    // Execute the entire schema file as one query
    try {
      await appClient.query(schemaSQL);
      console.log('   ✅ Schema executed successfully');
    } catch (err) {
      console.error('   ❌ Error executing schema:', err.message);
      throw err;
    }

    await appClient.end();
    console.log('\n✅ Database reset complete!');

  } catch (error) {
    console.error('\n❌ Error resetting database:', error.message);
    process.exit(1);
  }
}

resetDatabase();

