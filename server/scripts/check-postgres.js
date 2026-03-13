/**
 * Quick PostgreSQL Connection Check
 * 
 * Usage: node scripts/check-postgres.js
 */

const { Client } = require('pg');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/postgres';

async function checkPostgres() {
  const client = new Client({ connectionString: DATABASE_URL });
  
  try {
    console.log('🔌 Testing PostgreSQL connection...');
    await client.connect();
    const result = await client.query('SELECT version()');
    console.log('✅ PostgreSQL is running!');
    console.log(`   Version: ${result.rows[0].version.split(' ')[0]} ${result.rows[0].version.split(' ')[1]}`);
    await client.end();
    return true;
  } catch (error) {
    console.error('❌ Cannot connect to PostgreSQL:', error.message);
    console.log('\n💡 Make sure:');
    console.log('   1. PostgreSQL is installed and running');
    console.log('   2. DATABASE_URL in .env is correct');
    console.log('   3. PostgreSQL credentials are correct');
    return false;
  }
}

checkPostgres().then(success => {
  process.exit(success ? 0 : 1);
});

