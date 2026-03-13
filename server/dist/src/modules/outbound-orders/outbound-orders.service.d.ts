import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
export declare class OutboundOrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateOutboundOrderDto, createdByActorId: string): Promise<{
        client: {
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
        clientId: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        orderNumber: string | null;
        currentStage: string | null;
        createdByActorId: string;
        expectedShipDate: Date | null;
    }>;
    findMany(filter?: OutboundOrderFilterDto): Promise<({
        client: {
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
            productId: string;
            createdAt: Date;
            updatedAt: Date;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            outboundOrderId: string;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
        })[];
    } & {
        id: string;
        clientId: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        orderNumber: string | null;
        currentStage: string | null;
        createdByActorId: string;
        expectedShipDate: Date | null;
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
                batchId: string | null;
                locationId: string | null;
                createdAt: Date;
                updatedAt: Date;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
                outboundOrderItemId: string;
            })[];
            uom: {
                id: string;
                code: string;
                name: string;
            };
        } & {
            id: string;
            productId: string;
            createdAt: Date;
            updatedAt: Date;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            outboundOrderId: string;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
        })[];
    } & {
        id: string;
        clientId: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        orderNumber: string | null;
        currentStage: string | null;
        createdByActorId: string;
        expectedShipDate: Date | null;
    }>;
    update(id: string, dto: UpdateOutboundOrderDto): Promise<{
        client: {
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
            productId: string;
            createdAt: Date;
            updatedAt: Date;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            outboundOrderId: string;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
        })[];
    } & {
        id: string;
        clientId: string;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        orderNumber: string | null;
        currentStage: string | null;
        createdByActorId: string;
        expectedShipDate: Date | null;
    }>;
    addItem(orderId: string, dto: AddOutboundOrderItemDto): Promise<{
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
        productId: string;
        createdAt: Date;
        updatedAt: Date;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        uomId: string;
        outboundOrderId: string;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
    }>;
}
