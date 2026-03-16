import { PrismaService } from '../../database/prisma/prisma.service';
import { CurrentStockFilterDto } from './dto/current-stock-filter.dto';
import { InventoryLedgerFilterDto } from './dto/inventory-ledger-filter.dto';
import { CreateLedgerEntryDto } from './dto/create-ledger-entry.dto';
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    private formatMonthLabel;
    private formatWeekLabel;
    getDashboard(clientId?: string): Promise<{
        stats: {
            totalProducts: number;
            totalStock: number;
            incomingOrders: number;
            outgoingOrders: number;
            recentMovements: number;
        };
        movementByMonth: {
            name: string;
            inbound: number;
            outbound: number;
        }[];
        stockDistribution: {
            name: string;
            value: number;
        }[];
        weeklyTrend: {
            name: string;
            value: number;
        }[];
        recentMovements: {
            date: Date;
            movementType: import(".prisma/client").$Enums.MovementType;
            sku: string;
            qtyChange: number;
            referenceId: string | null;
        }[];
    }>;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        quantity: import("@prisma/client/runtime/library").Decimal;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
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
        id: string;
        createdAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        movementType: import(".prisma/client").$Enums.MovementType;
        qtyChange: import("@prisma/client/runtime/library").Decimal;
        qtyBefore: import("@prisma/client/runtime/library").Decimal;
        qtyAfter: import("@prisma/client/runtime/library").Decimal;
        referenceType: string | null;
        referenceId: string | null;
        batchId: string | null;
        locationId: string | null;
    }>;
}
