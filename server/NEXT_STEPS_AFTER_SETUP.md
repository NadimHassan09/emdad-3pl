# Next Steps After Database Setup

## Step 1: Run Database Setup

**You need to provide your PostgreSQL admin credentials first.**

### Quick Setup (PowerShell):
```powershell
cd server
.\scripts\setup-with-credentials.ps1
```

### Or Set Credentials Manually:
```powershell
$env:POSTGRES_ADMIN_USER="your_postgres_username"
$env:POSTGRES_ADMIN_PASSWORD="your_postgres_password"
npm run db:setup
```

**Expected Output:**
```
🔌 Connecting to PostgreSQL as admin...
✅ Connected to PostgreSQL

👤 Checking/Creating database user: emdad_3pl_app...
   ✅ User emdad_3pl_app created

📦 Checking/Creating database: emdad_3pl...
   ✅ Database emdad_3pl created

🔐 Granting privileges to emdad_3pl_app...
   ✅ Privileges granted

🔌 Connecting to database as emdad_3pl_app...
   ✅ Connected to emdad_3pl

📄 Reading schema.sql...
   🚀 Executing schema.sql...
   ✅ Schema executed successfully

📝 Updating .env file...
   ✅ Updated .env

✅ Database setup complete!

📋 Database Credentials:
   Database Name: emdad_3pl
   Database User: emdad_3pl_app
   Database Password: <generated-password>
   Host: localhost:5432
```

## Step 2: Generate Prisma Client

After setup succeeds, generate the Prisma client:

```bash
npm run prisma:generate
```

**Expected Output:**
```
✔ Generated Prisma Client (v6.19.2) to .\node_modules\@prisma\client
```

## Step 3: Verify Database Connection

Test that everything is connected:

```bash
npm run db:check
```

**Expected Output:**
```
🔌 Testing PostgreSQL connection...
✅ PostgreSQL is running!
   Version: PostgreSQL 15.x
```

## Step 4: Seed Database (Optional)

Populate the database with fake data for development:

```bash
npm run db:seed
```

**Expected Output:**
```
🌱 Starting seed...
🧹 Cleaning existing data...
✅ Existing data cleaned
📏 Creating UOMs...
👤 Creating user roles...
👥 Creating users...
🎭 Creating actors...
🏢 Creating clients...
...
✅ Seed completed successfully!

📝 Summary:
   - UOMs: 3
   - Users: 2
   - Clients: 2
   - Warehouses: 2
   - Locations: 3
   - Products: 3
   - Batches: 3
   - Inventory Ledger Entries: 4
   - Current Stock (auto-generated): 4 entries
```

## Step 5: Start the Server

Start the NestJS development server:

```bash
npm run start:dev
```

**Expected Output:**
```
[Nest] INFO  [NestFactory] Starting Nest application...
[Nest] INFO  [InstanceLoader] DatabaseModule dependencies initialized
[Nest] INFO  [InstanceLoader] AppModule dependencies initialized
[Nest] INFO  [NestApplication] Nest application successfully started
```

## Step 6: Test the API

Once the server is running, test the inventory endpoints:

### Using curl (PowerShell):
```powershell
# Get current stock
Invoke-RestMethod -Uri "http://localhost:3000/inventory/current-stock" -Method Get

# Get inventory ledger
Invoke-RestMethod -Uri "http://localhost:3000/inventory/ledger" -Method Get
```

### Using browser:
- Open: http://localhost:3000/inventory/current-stock
- Open: http://localhost:3000/inventory/ledger

## Step 7: View Data in Prisma Studio

Open Prisma Studio to browse the database:

```bash
npm run prisma:studio
```

This opens a web interface at http://localhost:5555 where you can:
- Browse all tables
- View and edit data
- See relationships

## Troubleshooting

### If setup fails with "password authentication failed":
1. Verify your PostgreSQL is running
2. Check your admin credentials in pgAdmin
3. Try connecting manually: `psql -U postgres`
4. Set correct credentials and try again

### If Prisma generate fails:
- Make sure database setup completed successfully
- Check that `.env` file has `DATABASE_URL`
- Try: `npm run db:check` to verify connection

### If seed fails:
- Make sure database setup and Prisma generate completed
- Check that schema was applied (tables exist)
- Try: `npm run prisma:studio` to verify database structure

## Complete Setup Checklist

- [ ] PostgreSQL is running
- [ ] Ran `npm run db:setup` successfully
- [ ] Ran `npm run prisma:generate` successfully
- [ ] Ran `npm run db:check` - connection verified
- [ ] (Optional) Ran `npm run db:seed` - data seeded
- [ ] Ran `npm run start:dev` - server started
- [ ] Tested API endpoints
- [ ] Opened Prisma Studio to view data

## Quick Command Reference

```bash
# Full setup sequence
npm run db:setup              # Setup database
npm run prisma:generate      # Generate Prisma client
npm run db:check             # Verify connection
npm run db:seed              # Seed fake data (optional)
npm run start:dev            # Start server
npm run prisma:studio        # View data in browser
```


