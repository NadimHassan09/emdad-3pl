/**
 * Create a client administrator account for testing invitations.
 * Run: npx ts-node scripts/create-client-admin.ts
 * Or:  node -r ts-node/register scripts/create-client-admin.ts
 *
 * Credentials: admin@client.test / password123
 */

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const EMAIL = 'admin@client.test';
const PASSWORD = 'password123';
const FIRST_NAME = 'Client';
const LAST_NAME = 'Admin';

async function main() {
  console.log('Creating client administrator account for invitation testing...');

  const passwordHash = await bcrypt.hash(PASSWORD, 10);

  // Get or create client
  const client = await prisma.client.upsert({
    where: { code: 'CLIENT001' },
    update: {},
    create: {
      code: 'CLIENT001',
      name: 'Test Client',
      contactEmail: 'contact@test.com',
      status: 'ACTIVE',
    },
  });

  // Get or create CLIENT_ADMIN role
  const clientAdminRole = await prisma.clientRole.upsert({
    where: { roleName: 'CLIENT_ADMIN' },
    update: {},
    create: {
      roleName: 'CLIENT_ADMIN',
      permissionsJson: { orders: ['read', 'write'], inventory: ['read'] },
      isActive: true,
    },
  });

  // Create or update client account
  const account = await prisma.clientAccount.upsert({
    where: { email: EMAIL },
    update: {
      passwordHash,
      firstName: FIRST_NAME,
      lastName: LAST_NAME,
      clientRoleId: clientAdminRole.id,
      isActive: true,
    },
    create: {
      clientId: client.id,
      clientRoleId: clientAdminRole.id,
      email: EMAIL,
      passwordHash,
      firstName: FIRST_NAME,
      lastName: LAST_NAME,
      isActive: true,
    },
  });

  // Ensure actor exists
  const existingActor = await prisma.actor.findUnique({
    where: { clientAccountId: account.id },
  });
  if (!existingActor) {
    await prisma.actor.create({
      data: {
        actorType: 'CLIENT_ACCOUNT',
        clientAccountId: account.id,
      },
    });
  }

  console.log('Client administrator account ready.');
  console.log('');
  console.log('  Email:    ', EMAIL);
  console.log('  Password: ', PASSWORD);
  console.log('');
  console.log('Use these credentials to log in to the client portal, then go to /users and click "دعوة مستخدم" to test invitations.');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
