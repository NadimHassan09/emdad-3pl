import { PrismaService } from '../../database/prisma/prisma.service';
import { CurrentStockFilterDto } from './dto/current-stock-filter.dto';
import { InventoryLedgerFilterDto } from './dto/inventory-ledger-filter.dto';
import { CreateLedgerEntryDto } from './dto/create-ledger-entry.dto';
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findCurrentStock(filter?: CurrentStockFilterDto): Promise<({
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
    } & {
        clientId: string;
        createdAt: Date;
        quantity: import("@prisma/client/runtime/library").Decimal;
        id: string;
        updatedAt: Date;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
    })[]>;
    findCurrentStockByProduct(productId: string, filter?: CurrentStockFilterDto): Promise<({
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
    } & {
        clientId: string;
        createdAt: Date;
        quantity: import("@prisma/client/runtime/library").Decimal;
        id: string;
        updatedAt: Date;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
    })[]>;
    findLedger(filter?: InventoryLedgerFilterDto): Promise<({
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
    } & {
        clientId: string;
        createdAt: Date;
        referenceType: string | null;
        referenceId: string | null;
        id: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        batchId: string | null;
        locationId: string | null;
    })[]>;
    createLedgerEntry(dto: CreateLedgerEntryDto): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        location: {
            id: string;
            code: string;
        } | null;
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
    } & {
        clientId: string;
        createdAt: Date;
        referenceType: string | null;
        referenceId: string | null;
        id: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        batchId: string | null;
        locationId: string | null;
    }>;
}
