/**
 * Database Setup Script
 * 
 * This script:
 * 1. Creates the database if it doesn't exist
 * 2. Runs the schema.sql to create all tables, enums, triggers, etc.
 * 
 * Usage: node scripts/setup-database.js
 */

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL not found in .env file');
  process.exit(1);
}

// Parse DATABASE_URL to get connection details
const url = new URL(DATABASE_URL);
const dbName = url.pathname.slice(1); // Remove leading /
const adminUrl = `${url.protocol}//${url.username}:${url.password}@${url.host}:${url.port}/postgres`;

async function setupDatabase() {
  const adminClient = new Client({ connectionString: adminUrl });
  
  try {
    console.log('🔌 Connecting to PostgreSQL...');
    await adminClient.connect();
    console.log('✅ Connected to PostgreSQL');

    // Check if database exists
    const dbCheck = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName]
    );

    if (dbCheck.rows.length === 0) {
      console.log(`📦 Creating database: ${dbName}...`);
      await adminClient.query(`CREATE DATABASE ${dbName}`);
      console.log(`✅ Database ${dbName} created`);
    } else {
      console.log(`✅ Database ${dbName} already exists`);
    }

    await adminClient.end();

    // Connect to the target database and run schema
    const dbClient = new Client({ connectionString: DATABASE_URL });
    await dbClient.connect();
    console.log(`🔌 Connected to database: ${dbName}`);

    // Read and execute schema.sql
    const schemaPath = path.join(__dirname, '../../context/schema.sql');
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found at: ${schemaPath}`);
    }

    console.log('📄 Reading schema.sql...');
    const schemaSQL = fs.readFileSync(schemaPath, 'utf8');

    console.log('🚀 Executing schema.sql...');
    await dbClient.query(schemaSQL);
    console.log('✅ Schema executed successfully');

    await dbClient.end();
    console.log('✅ Database setup complete!');
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    process.exit(1);
  }
}

setupDatabase();

