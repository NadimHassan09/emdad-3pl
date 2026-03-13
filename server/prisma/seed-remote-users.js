// Idempotent remote seed for test users, client accounts, and related roles.
// Uses DATABASE_URL from .env (currently pointing at the remote DB).
// Safe to run multiple times; uses upserts on unique fields.

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding remote DB with test users and client accounts (idempotent)...');

  const password = 'password123';
  const passwordHash = await bcrypt.hash(password, 10);

  // 1) Internal user roles
  console.log('👤 Upserting internal user roles...');
  const adminRole = await prisma.userRole.upsert({
    where: { roleName: 'ADMIN' },
    update: {},
    create: {
      roleName: 'ADMIN',
      permissionsJson: { all: true },
      isActive: true,
    },
  });

  const warehouseManagerRole = await prisma.userRole.upsert({
    where: { roleName: 'WAREHOUSE_MANAGER' },
    update: {},
    create: {
      roleName: 'WAREHOUSE_MANAGER',
      permissionsJson: {
        inventory: ['read', 'write'],
        orders: ['read', 'write'],
      },
      isActive: true,
    },
  });

  // 2) Internal users
  console.log('👥 Upserting internal users...');
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@emdad3pl.com' },
    update: {
      passwordHash,
      firstName: 'Admin',
      lastName: 'User',
      internalRoleId: adminRole.id,
      isActive: true,
    },
    create: {
      email: 'admin@emdad3pl.com',
      passwordHash,
      firstName: 'Admin',
      lastName: 'User',
      internalRoleId: adminRole.id,
      isActive: true,
    },
  });

  const managerUser = await prisma.user.upsert({
    where: { email: 'manager@emdad3pl.com' },
    update: {
      passwordHash,
      firstName: 'Warehouse',
      lastName: 'Manager',
      internalRoleId: warehouseManagerRole.id,
      isActive: true,
    },
    create: {
      email: 'manager@emdad3pl.com',
      passwordHash,
      firstName: 'Warehouse',
      lastName: 'Manager',
      internalRoleId: warehouseManagerRole.id,
      isActive: true,
    },
  });

  // 3) Actors for internal users
  console.log('🎭 Upserting actors for internal users...');
  await prisma.actor.upsert({
    where: { userId: adminUser.id },
    update: {},
    create: {
      actorType: 'INTERNAL_USER',
      userId: adminUser.id,
    },
  });

  await prisma.actor.upsert({
    where: { userId: managerUser.id },
    update: {},
    create: {
      actorType: 'INTERNAL_USER',
      userId: managerUser.id,
    },
  });

  // 4) Client and client role
  console.log('🏢 Upserting client and client roles...');
  const client = await prisma.client.upsert({
    where: { code: 'CLIENT001' },
    update: {},
    create: {
      code: 'CLIENT001',
      name: 'Acme Corporation',
      contactEmail: 'contact@acme.com',
      contactPhone: '+1-555-0101',
      addressLine1: '123 Business St',
      city: 'New York',
      stateRegion: 'NY',
      postalCode: '10001',
      countryCode: 'US',
      status: 'ACTIVE',
      isActive: true,
    },
  });

  const clientAdminRole = await prisma.clientRole.upsert({
    where: { roleName: 'CLIENT_ADMIN' },
    update: {},
    create: {
      roleName: 'CLIENT_ADMIN',
      permissionsJson: {
        orders: ['read', 'write'],
        inventory: ['read'],
      },
      isActive: true,
    },
  });

  // 5) Client account
  console.log('👤 Upserting client account...');
  const clientAccount = await prisma.clientAccount.upsert({
    where: { email: 'client1@acme.com' },
    update: {
      clientId: client.id,
      clientRoleId: clientAdminRole.id,
      passwordHash,
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
    },
    create: {
      clientId: client.id,
      clientRoleId: clientAdminRole.id,
      email: 'client1@acme.com',
      passwordHash,
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
    },
  });

  // 6) Actor for client account
  console.log('🎭 Upserting actor for client account...');
  await prisma.actor.upsert({
    where: { clientAccountId: clientAccount.id },
    update: {},
    create: {
      actorType: 'CLIENT_ACCOUNT',
      clientAccountId: clientAccount.id,
    },
  });

  console.log('✅ Remote users and client accounts seeded successfully.');
  console.log('   Staff user:  admin@emdad3pl.com / password123');
  console.log('   Staff user:  manager@emdad3pl.com / password123');
  console.log('   Client user: client1@acme.com / password123');
}

main()
  .catch((e) => {
    console.error('❌ Seed-remote-users failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


