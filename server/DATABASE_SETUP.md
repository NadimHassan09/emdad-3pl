# Database Setup Guide

This guide will help you set up PostgreSQL and seed it with fake data for the 3PL WMS backend.

## Prerequisites

1. **PostgreSQL** installed and running
   - Download from: https://www.postgresql.org/download/
   - Default port: 5432
   - Default user: `postgres`

2. **Node.js** and npm installed

## Step 1: Create Environment File

Create a `.env` file in the `server` directory with the following content:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"

# JWT
JWT_SECRET="your-secret-key-change-in-production"
JWT_EXPIRES_IN="7d"

# Server
PORT=3000
```

**Important**: Update the `DATABASE_URL` with your PostgreSQL credentials:
- Replace `postgres:postgres` with your PostgreSQL username and password
- Replace `localhost:5432` if your PostgreSQL is on a different host/port
- The database name `emdad_3pl` will be created automatically

## Step 2: Install Dependencies

```bash
cd server
npm install
```

## Step 3: Set Up Database

Run the database setup script to create the database and apply the schema:

```bash
npm run db:setup
```

This script will:
- Create the `emdad_3pl` database if it doesn't exist
- Execute `schema.sql` to create all tables, enums, triggers, and functions

## Step 4: Generate Prisma Client

After the database is set up, generate the Prisma client:

```bash
npm run prisma:generate
```

## Step 5: Seed Database with Fake Data

Run the seed script to populate the database with fake data:

```bash
npm run db:seed
```

Or use Prisma's seed command:

```bash
npx prisma db seed
```

## What Gets Seeded

The seed script creates:
- **3 UOMs** (Each, Kilogram, Meter)
- **2 Users** (Admin and Warehouse Manager)
- **2 Clients** (Acme Corporation, Tech Solutions Inc)
- **2 Warehouses** (Main Warehouse, Secondary Warehouse)
- **3 Locations** (Bins in warehouses)
- **3 Products** (Widget A, Widget B, Gadget X)
- **3 Batches** (with expiry dates and lot numbers)
- **4 Inventory Ledger Entries** (which auto-create current_stock entries via triggers)

## Login Credentials

After seeding, you can use these credentials:

- **Admin User**: `admin@emdad3pl.com` / `password123`
- **Manager User**: `manager@emdad3pl.com` / `password123`
- **Client Account**: `client1@acme.com` / `password123`

## Verify Setup

1. **Check database connection**:
   ```bash
   npm run start:dev
   ```

2. **Open Prisma Studio** to view the data:
   ```bash
   npm run prisma:studio
   ```

3. **Test API endpoints**:
   - Start the server: `npm run start:dev`
   - Test inventory endpoint: `GET http://localhost:3000/inventory/current-stock`

## Troubleshooting

### Database Connection Issues

If you get connection errors:
1. Verify PostgreSQL is running: `pg_isready` or check services
2. Check your `.env` file has the correct `DATABASE_URL`
3. Verify PostgreSQL credentials are correct

### Schema Errors

If schema execution fails:
1. Make sure the database was created successfully
2. Check PostgreSQL logs for specific errors
3. Try dropping and recreating the database:
   ```sql
   DROP DATABASE IF EXISTS emdad_3pl;
   CREATE DATABASE emdad_3pl;
   ```

### Seed Errors

If seeding fails:
1. Make sure the database setup completed successfully
2. Check that all tables were created
3. Try running the seed script again

## Next Steps

Once the database is set up and seeded:
1. Start the development server: `npm run start:dev`
2. Test the API endpoints
3. Explore the data using Prisma Studio: `npm run prisma:studio`


