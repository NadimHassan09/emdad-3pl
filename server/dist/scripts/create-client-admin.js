"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new client_1.PrismaClient();
const EMAIL = 'admin@client.test';
const PASSWORD = 'password123';
const FIRST_NAME = 'Client';
const LAST_NAME = 'Admin';
async function main() {
    console.log('Creating client administrator account for invitation testing...');
    const passwordHash = await bcrypt.hash(PASSWORD, 10);
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
    const clientAdminRole = await prisma.clientRole.upsert({
        where: { roleName: 'CLIENT_ADMIN' },
        update: {},
        create: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: { orders: ['read', 'write'], inventory: ['read'] },
            isActive: true,
        },
    });
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
//# sourceMappingURL=create-client-admin.js.map