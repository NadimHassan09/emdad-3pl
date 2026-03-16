import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateReturnOrderDto } from './dto/create-return-order.dto';
import { ReturnOrderFilterDto } from './dto/return-order-filter.dto';
import { InventoryService } from '../inventory/inventory.service';
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    })[]>;
    findOne(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
    process(id: string): Promise<{
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
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
        outboundOrderId: string;
    }>;
}
