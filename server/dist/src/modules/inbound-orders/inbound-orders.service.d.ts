import { PrismaService } from '../../database/prisma/prisma.service';
import { InventoryService } from '../inventory/inventory.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
export declare class InboundOrdersService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
    create(dto: CreateInboundOrderDto, createdByActorId: string): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    findMany(filter?: InboundOrderFilterDto): Promise<({
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        items: ({
            product: {
                id: string;
                name: string;
                sku: string;
            };
            uom: {
                id: string;
                code: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            inboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
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
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
        items: ({
            product: {
                id: string;
                name: string;
                sku: string;
            };
            batches: ({
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
                createdAt: Date;
                updatedAt: Date;
                qtyReceived: import("@prisma/client/runtime/library").Decimal;
                inboundOrderItemId: string;
                batchId: string | null;
                locationId: string | null;
            })[];
            uom: {
                id: string;
                code: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            inboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    update(id: string, dto: UpdateInboundOrderDto): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        items: ({
            product: {
                id: string;
                name: string;
                sku: string;
            };
            uom: {
                id: string;
                code: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            inboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    addItem(orderId: string, dto: AddInboundOrderItemDto): Promise<{
        product: {
            id: string;
            name: string;
            sku: string;
        };
        uom: {
            id: string;
            code: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        inboundOrderId: string;
        productId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyReceived: import("@prisma/client/runtime/library").Decimal;
        uomId: string;
    }>;
    receive(orderId: string, dto: ReceiveInboundOrderDto): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            actorType: import(".prisma/client").$Enums.ActorType;
            user: {
                id: string;
                email: string;
            } | null;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
        items: ({
            product: {
                id: string;
                name: string;
                sku: string;
            };
            batches: ({
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
                createdAt: Date;
                updatedAt: Date;
                qtyReceived: import("@prisma/client/runtime/library").Decimal;
                inboundOrderItemId: string;
                batchId: string | null;
                locationId: string | null;
            })[];
            uom: {
                id: string;
                code: string;
                name: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            inboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
}
