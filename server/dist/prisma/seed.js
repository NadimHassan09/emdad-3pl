"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
    *
    * Seeds;
the;
database;
with (fake)
    data;
for (development; and; testing.
    *
    * Usage)
    : npx;
prisma;
db;
seed
    * /;
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Starting seed...');
    console.log('🧹 Cleaning existing data...');
    try {
        await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE 
        inventory_ledger, current_stock,
        batch, product, location, warehouse, uom,
        actor, client_account, client_role, users, user_role, client
      RESTART IDENTITY CASCADE;
    `);
        console.log('✅ Existing data cleaned');
    }
    catch (error) {
        console.log('⚠️  Some tables may not exist yet, continuing...');
    }
    console.log('📏 Creating UOMs...');
    const uomEA = await prisma.uom.create({
        data: {
            code: 'EA',
            name: 'Each',
            dimension: 'COUNT',
            baseConversion: 1,
        },
    });
    const uomKG = await prisma.uom.create({
        data: {
            code: 'KG',
            name: 'Kilogram',
            dimension: 'WEIGHT',
            baseConversion: 1,
        },
    });
    const uomM = await prisma.uom.create({
        data: {
            code: 'M',
            name: 'Meter',
            dimension: 'LENGTH',
            baseConversion: 1,
        },
    });
    console.log('👤 Creating user roles...');
    const adminRole = await prisma.userRole.create({
        data: {
            roleName: 'ADMIN',
            permissionsJson: {
                all: true,
            },
        },
    });
    const warehouseManagerRole = await prisma.userRole.create({
        data: {
            roleName: 'WAREHOUSE_MANAGER',
            permissionsJson: {
                inventory: ['read', 'write'],
                orders: ['read', 'write'],
            },
        },
    });
    console.log('👥 Creating users...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Admin',
            lastName: 'User',
            internalRoleId: adminRole.id,
        },
    });
    const managerUser = await prisma.user.create({
        data: {
            email: 'manager@emdad3pl.com',
            passwordHash: hashedPassword,
            firstName: 'Warehouse',
            lastName: 'Manager',
            internalRoleId: warehouseManagerRole.id,
        },
    });
    console.log('🎭 Creating actors...');
    const adminActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: adminUser.id,
        },
    });
    const managerActor = await prisma.actor.create({
        data: {
            actorType: 'INTERNAL_USER',
            userId: managerUser.id,
        },
    });
    console.log('🏢 Creating clients...');
    const client1 = await prisma.client.create({
        data: {
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
        },
    });
    const client2 = await prisma.client.create({
        data: {
            code: 'CLIENT002',
            name: 'Tech Solutions Inc',
            contactEmail: 'info@techsolutions.com',
            contactPhone: '+1-555-0202',
            addressLine1: '456 Innovation Ave',
            city: 'San Francisco',
            stateRegion: 'CA',
            postalCode: '94102',
            countryCode: 'US',
            status: 'ACTIVE',
        },
    });
    console.log('🔐 Creating client roles...');
    const clientAdminRole = await prisma.clientRole.create({
        data: {
            roleName: 'CLIENT_ADMIN',
            permissionsJson: {
                orders: ['read', 'write'],
                inventory: ['read'],
            },
        },
    });
    console.log('👤 Creating client accounts...');
    const client1Account = await prisma.clientAccount.create({
        data: {
            clientId: client1.id,
            clientRoleId: clientAdminRole.id,
            email: 'client1@acme.com',
            passwordHash: hashedPassword,
            firstName: 'John',
            lastName: 'Doe',
        },
    });
    const client1Actor = await prisma.actor.create({
        data: {
            actorType: 'CLIENT_ACCOUNT',
            clientAccountId: client1Account.id,
        },
    });
    console.log('🏭 Creating warehouses...');
    const warehouse1 = await prisma.warehouse.create({
        data: {
            code: 'WH001',
            name: 'Main Warehouse',
            capacityValue: 10000,
            capacityUomId: uomM.id,
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            code: 'WH002',
            name: 'Secondary Warehouse',
            capacityValue: 5000,
            capacityUomId: uomM.id,
        },
    });
    console.log('📍 Creating locations...');
    const location1 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location2 = await prisma.location.create({
        data: {
            warehouseId: warehouse1.id,
            code: 'A-01-02',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    const location3 = await prisma.location.create({
        data: {
            warehouseId: warehouse2.id,
            code: 'B-01-01',
            locationType: 'BIN',
            capacityValue: 100,
            capacityUomId: uomEA.id,
        },
    });
    console.log('📦 Creating products...');
    const product1 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD001',
            name: 'Widget A',
            defaultUomId: uomEA.id,
            minThreshold: 10,
        },
    });
    const product2 = await prisma.product.create({
        data: {
            clientId: client1.id,
            sku: 'PROD002',
            name: 'Widget B',
            defaultUomId: uomEA.id,
            minThreshold: 20,
        },
    });
    const product3 = await prisma.product.create({
        data: {
            clientId: client2.id,
            sku: 'PROD003',
            name: 'Gadget X',
            defaultUomId: uomEA.id,
            minThreshold: 15,
        },
    });
    console.log('📋 Creating batches...');
    const batch1 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH001',
            expiryDate: new Date('2025-12-31'),
            manufacturingDate: new Date('2024-01-15'),
            receivedDate: new Date('2024-01-20'),
            lotNumber: 'LOT-2024-001',
            supplierBatchCode: 'SUP-001',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            productId: product1.id,
            batchCode: 'BATCH002',
            expiryDate: new Date('2025-11-30'),
            manufacturingDate: new Date('2024-02-10'),
            receivedDate: new Date('2024-02-15'),
            lotNumber: 'LOT-2024-002',
            batchStatus: 'AVAILABLE',
        },
    });
    const batch3 = await prisma.batch.create({
        data: {
            productId: product2.id,
            batchCode: 'BATCH003',
            expiryDate: new Date('2026-01-31'),
            manufacturingDate: new Date('2024-03-01'),
            receivedDate: new Date('2024-03-05'),
            batchStatus: 'AVAILABLE',
        },
    });
    console.log('📊 Creating inventory ledger entries...');
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch1.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 100,
            qtyBefore: 0,
            qtyAfter: 100,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product1.id,
            batchId: batch2.id,
            locationId: location2.id,
            movementType: 'RECEIPT',
            qtyChange: 50,
            qtyBefore: 0,
            qtyAfter: 50,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client1.id,
            warehouseId: warehouse1.id,
            productId: product2.id,
            batchId: batch3.id,
            locationId: location1.id,
            movementType: 'RECEIPT',
            qtyChange: 75,
            qtyBefore: 0,
            qtyAfter: 75,
            referenceType: 'INBOUND_ORDER',
        },
    });
    await prisma.inventoryLedger.create({
        data: {
            clientId: client2.id,
            warehouseId: warehouse2.id,
            productId: product3.id,
            batchId: null,
            locationId: location3.id,
            movementType: 'RECEIPT',
            qtyChange: 200,
            qtyBefore: 0,
            qtyAfter: 200,
            referenceType: 'INBOUND_ORDER',
        },
    });
    console.log('✅ Seed completed successfully!');
    console.log('\n📝 Summary:');
    console.log(`   - UOMs: 3`);
    console.log(`   - Users: 2`);
    console.log(`   - Clients: 2`);
    console.log(`   - Warehouses: 2`);
    console.log(`   - Locations: 3`);
    console.log(`   - Products: 3`);
    console.log(`   - Batches: 3`);
    console.log(`   - Inventory Ledger Entries: 4`);
    console.log(`   - Current Stock (auto-generated): 4 entries`);
    console.log('\n🔑 Login credentials:');
    console.log('   Admin: admin@emdad3pl.com / password123');
    console.log('   Manager: manager@emdad3pl.com / password123');
    console.log('   Client: client1@acme.com / password123');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map