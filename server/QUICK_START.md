# Quick Start Guide

## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`

















## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`

















## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`






















## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`

















## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`










## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`












## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bash
# Start PostgreSQL in Docker
docker run --name emdad-3pl-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=emdad_3pl \
  -p 5432:5432 \
  -d postgres:15

# Wait a few seconds for PostgreSQL to start, then continue with setup
```

### Option 2: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - Windows: Download from https://www.postgresql.org/download/windows/
   - Mac: `brew install postgresql@15`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: Check Services app or run `pg_ctl start`
   - Mac/Linux: `brew services start postgresql@15` or `sudo systemctl start postgresql`

3. **Set up PostgreSQL user** (if needed):
   ```sql
   -- Connect to PostgreSQL as superuser
   psql -U postgres
   
   -- Create user if it doesn't exist
   CREATE USER postgres WITH PASSWORD 'postgres';
   ALTER USER postgres CREATEDB;
   ```

### Setup Steps

1. **Create/Update .env file** in the `server` directory:
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emdad_3pl?schema=public"
   JWT_SECRET="dev-secret-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   PORT=3000
   ```
   
   **Important**: Update the password in DATABASE_URL if your PostgreSQL uses a different password.

2. **Test PostgreSQL connection**:
   ```bash
   cd server
   node scripts/check-postgres.js
   ```

3. **Set up the database**:
   ```bash
   npm run db:setup
   ```
   
   This will:
   - Create the `emdad_3pl` database
   - Run the schema.sql to create all tables, enums, triggers

4. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

5. **Seed the database with fake data**:
   ```bash
   npm run db:seed
   ```

6. **Verify setup**:
   ```bash
   # Start the server
   npm run start:dev
   
   # In another terminal, open Prisma Studio to view data
   npm run prisma:studio
   ```

## Troubleshooting

### PostgreSQL Connection Issues

**Error: "password authentication failed"**
- Check your PostgreSQL password
- Update DATABASE_URL in .env with correct credentials
- Try: `psql -U postgres` to test connection manually

**Error: "connection refused"**
- Make sure PostgreSQL is running
- Check if PostgreSQL is on port 5432: `netstat -an | findstr 5432` (Windows) or `lsof -i :5432` (Mac/Linux)
- Start PostgreSQL service

**Error: "database does not exist"**
- The setup script will create it automatically
- Or create manually: `createdb -U postgres emdad_3pl`

### Database Setup Issues

If `npm run db:setup` fails:
1. Make sure PostgreSQL is running and accessible
2. Check DATABASE_URL is correct
3. Verify you have permissions to create databases
4. Try creating the database manually first:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

### Seed Issues

If seeding fails:
1. Make sure database setup completed successfully
2. Check that all tables exist: `npm run prisma:studio`
3. Try running seed again: `npm run db:seed`

## What Gets Created

After running the setup and seed:

- **Database**: `emdad_3pl` with all tables from schema.sql
- **Users**: 2 internal users (admin, manager)
- **Clients**: 2 clients with accounts
- **Warehouses**: 2 warehouses with 3 locations
- **Products**: 3 products with 3 batches
- **Inventory**: 4 ledger entries with current stock

## Test Credentials

- **Admin**: `admin@emdad3pl.com` / `password123`
- **Manager**: `manager@emdad3pl.com` / `password123`
- **Client**: `client1@acme.com` / `password123`

## Next Steps

1. Start the server: `npm run start:dev`
2. Test API: `GET http://localhost:3000/inventory/current-stock`
3. View data: `npm run prisma:studio`




## Setup PostgreSQL Database and Seed Data

### Option 1: Using Docker (Recommended)

If you have Docker installed, the easiest way is to use Docker:

```bas