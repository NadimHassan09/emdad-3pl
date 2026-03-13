import { InventoryService } from './inventory.service';
import { CurrentStockFilterDto } from './dto/current-stock-filter.dto';
import { InventoryLedgerFilterDto } from './dto/inventory-ledger-filter.dto';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findCurrentStock(filter: CurrentStockFilterDto): Promise<({
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
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
    } & {
        id: string;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findCurrentStockByProduct(productId: string, filter: CurrentStockFilterDto): Promise<({
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
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
    } & {
        id: string;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findLedger(filter: InventoryLedgerFilterDto): Promise<({
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
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
        location: {
            id: string;
            code: string;
        } | null;
    } & {
        id: string;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        createdAt: Date;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
    })[]>;
}
