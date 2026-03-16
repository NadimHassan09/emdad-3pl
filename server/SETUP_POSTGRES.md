# PostgreSQL Database Setup Guide

This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management










This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management










This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management




This guide explains how to automatically set up PostgreSQL for the Emdad 3PL WMS backend.

## Quick Start

1. **Make sure PostgreSQL is running** on your local machine
2. **Run the setup script**:
   ```bash
   npm run db:setup
   ```

That's it! The script will:
- Generate app-specific database credentials
- Create the database user if missing
- Create the database if missing
- Grant all necessary privileges
- Run `schema.sql` to create all tables, enums, triggers
- Update your `.env` file with the credentials

## Prerequisites

- PostgreSQL installed and running locally
- Default admin user `postgres` with password `postgres` (or set custom via env vars)

## Custom Admin Credentials

If your PostgreSQL uses different admin credentials, set them before running setup:

**Windows PowerShell:**
```powershell
$env:POSTGRES_ADMIN_USER="your_admin_user"
$env:POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

**Windows CMD:**
```cmd
set POSTGRES_ADMIN_USER=your_admin_user
set POSTGRES_ADMIN_PASSWORD=your_admin_password
npm run db:setup
```

**Linux/Mac:**
```bash
export POSTGRES_ADMIN_USER="your_admin_user"
export POSTGRES_ADMIN_PASSWORD="your_admin_password"
npm run db:setup
```

## Generated Credentials

The setup script automatically generates:

- **Database Name**: `emdad_3pl`
- **Database User**: `emdad_3pl_app`
- **Database Password**: Randomly generated secure password (saved to `.env`)

These credentials are automatically written to your `.env` file.

## Available Scripts

### `npm run db:setup`
Full database setup:
- Creates user and database
- Grants privileges
- Runs schema.sql
- Updates .env file

### `npm run db:reset`
Reset database (WARNING: Deletes all data):
- Drops and recreates database
- Re-runs schema.sql
- Useful for development when you want a fresh start

### `npm run db:check`
Test PostgreSQL connection:
- Verifies PostgreSQL is running
- Tests connection with current .env credentials

### `npm run db:seed`
Seed database with fake data:
- Populates database with sample data for development
- See `prisma/seed.ts` for what gets created

## Environment Variables

The setup script uses and creates these environment variables:

### For Setup (Optional - defaults shown):
- `POSTGRES_ADMIN_USER` - PostgreSQL admin username (default: `postgres`)
- `POSTGRES_ADMIN_PASSWORD` - PostgreSQL admin password (default: `postgres`)
- `DB_HOST` - PostgreSQL host (default: `localhost`)
- `DB_PORT` - PostgreSQL port (default: `5432`)

### Generated in .env:
- `DB_NAME` - Database name (`emdad_3pl`)
- `DB_USER` - Database user (`emdad_3pl_app`)
- `DB_PASSWORD` - Generated secure password
- `DATABASE_URL` - Full Prisma connection string

## How Backend Reads Database Config

The NestJS backend reads database configuration from:

1. **Prisma** reads `DATABASE_URL` from environment (via `prisma/schema.prisma`)
2. **ConfigModule** loads from `.env.local` (preferred) or `.env` (fallback)
3. **PrismaService** extends `PrismaClient` which uses `DATABASE_URL`

The connection flow:
```
.env/.env.local → DATABASE_URL → PrismaClient → PrismaService → Application
```

## Troubleshooting

### "password authentication failed"
- Check your PostgreSQL admin credentials
- Set `POSTGRES_ADMIN_USER` and `POSTGRES_ADMIN_PASSWORD` before running setup

### "connection refused"
- Make sure PostgreSQL is running
- Check if it's on the default port 5432
- Verify `DB_HOST` and `DB_PORT` in environment

### "database already exists"
- This is normal if you've run setup before
- The script will skip creation and continue
- Use `npm run db:reset` if you want to start fresh

### "permission denied"
- Make sure your admin user has `CREATEDB` privilege
- Try: `ALTER USER postgres CREATEDB;` in psql

## Manual Setup (Alternative)

If you prefer to set up manually:

1. Create database:
   ```sql
   CREATE DATABASE emdad_3pl;
   ```

2. Create user:
   ```sql
   CREATE USER emdad_3pl_app WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE emdad_3pl TO emdad_3pl_app;
   ```

3. Connect to database and run schema:
   ```bash
   psql -U emdad_3pl_app -d emdad_3pl -f ../context/schema.sql
   ```

4. Update `.env` with credentials

## Next Steps After Setup

1. **Generate Prisma client**:
   ```bash
   npm run prisma:generate
   ```

2. **Seed database (optional)**:
   ```bash
   npm run db:seed
   ```

3. **Start the server**:
   ```bash
   npm run start:dev
   ```

4. **View data in Prisma Studio**:
   ```bash
   npm run prisma:studio
   ```

## Security Notes

- The generated password is cryptographically secure
- Never commit `.env` file to version control
- Use `.env.example` as a template
- In production, use environment-specific secrets management











