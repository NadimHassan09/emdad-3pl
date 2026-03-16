import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateReturnOrderDto } from './dto/create-return-order.dto';
import { ReturnOrderFilterDto } from './dto/return-order-filter.dto';
import { InventoryService } from '../inventory/inventory.service';
export declare class ReturnOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateReturnOrderDto): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        clientId: string;
        productId: string;
        batchId: string | null;
        outboundOrderId: string;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
    }>;
    findMany(filter?: ReturnOrderFilterDto): Promise<({
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        clientId: string;
        productId: string;
        batchId: string | null;
        outboundOrderId: string;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
    })[]>;
    findOne(id: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        clientId: string;
        productId: string;
        batchId: string | null;
        outboundOrderId: string;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
    }>;
    process(id: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        client: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        };
        batch: {
            id: string;
            batchCode: string;
        } | null;
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        clientId: string;
        productId: string;
        batchId: string | null;
        outboundOrderId: string;
        returnNumber: string;
        qty: import("@prisma/client/runtime/library").Decimal;
        disposition: import(".prisma/client").$Enums.ReturnDisposition;
    }>;
}
