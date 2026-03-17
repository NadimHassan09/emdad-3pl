# Running Database Setup

## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```






















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```






















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```






















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```






















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```






















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```

















## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```












## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```










## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```




## Option 1: Using PowerShell Helper Script (Recommended for Windows)

```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

This script will prompt you for your PostgreSQL admin credentials and run the setup.

## Option 2: Set Environment Variables Manually

### Windows PowerShell:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

### Windows CMD:
```cmd
set POSTGRES_ADMIN_USER=your_postgres_username
set POSTGRES_ADMIN_PASSWORD=your_postgres_password
npm run db:setup
```

## Option 3: Check Your PostgreSQL Credentials

If you're not sure what your PostgreSQL admin credentials are:

1. **Check pgAdmin**: Open pgAdmin and see what credentials you use to connect
2. **Check PostgreSQL service**: The default Windows installation often uses:
   - Username: `postgres`
   - Password: The one you set during PostgreSQL installation
3. **Try connecting manually**:
   ```bash
   psql -U postgres
   ```

## After Setup Succeeds

Once the setup completes successfully, continue with:

```bash
# Generate Prisma client
npm run prisma:generate

# Seed database (optional)
npm run db:seed

# Start server
npm run start:dev
```



























