import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { CreateInboundOrderClientPortalDto } from './dto/create-inbound-order-client-portal.dto';
export declare class InboundOrdersController {
    private readonly inboundOrders;
    constructor(inboundOrders: InboundOrdersService);
    findManyClientPortal(filter: InboundOrderFilterDto, actor: JwtPayload): Promise<{
        items: {
            qtyOrdered: number;
            qtyReceived: number;
        }[];
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }[]>;
    findOneClientPortal(ref: string, actor: JwtPayload): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
        items: ({
            uom: {
                id: string;
                code: string;
                name: string;
            };
            batches: ({
                location: {
                    id: string;
                    code: string;
                } | null;
                batch: {
                    id: string;
                    batchCode: string;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                batchId: string | null;
                locationId: string | null;
                qtyReceived: import("@prisma/client/runtime/library").Decimal;
                inboundOrderItemId: string;
            })[];
            product: {
                id: string;
                name: string;
                sku: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            inboundOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }>;
    createClientPortal(dto: CreateInboundOrderClientPortalDto, actor: JwtPayload): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }>;
    addItemClientPortal(orderId: string, dto: AddInboundOrderItemDto, actor: JwtPayload): Promise<{
        qtyOrdered: number;
        qtyReceived: number;
        uom: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        uomId: string;
        inboundOrderId: string;
    }>;
    create(dto: CreateInboundOrderDto, payload: JwtPayload): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: InboundOrderFilterDto): Promise<{
        items: {
            qtyOrdered: number;
            qtyReceived: number;
        }[];
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }[]>;
    findOne(id: string): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
        items: ({
            uom: {
                id: string;
                code: string;
                name: string;
            };
            batches: ({
                location: {
                    id: string;
                    code: string;
                } | null;
                batch: {
                    id: string;
                    batchCode: string;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                batchId: string | null;
                locationId: string | null;
                qtyReceived: import("@prisma/client/runtime/library").Decimal;
                inboundOrderItemId: string;
            })[];
            product: {
                id: string;
                name: string;
                sku: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            inboundOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }>;
    update(id: string, dto: UpdateInboundOrderDto): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        items: ({
            uom: {
                id: string;
                code: string;
                name: string;
            };
            product: {
                id: string;
                name: string;
                sku: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            inboundOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }>;
    addItem(orderId: string, dto: AddInboundOrderItemDto): Promise<{
        qtyOrdered: number;
        qtyReceived: number;
        uom: {
            id: string;
            code: string;
            name: string;
        };
        product: {
            id: string;
            name: string;
            sku: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        uomId: string;
        inboundOrderId: string;
    }>;
    receive(orderId: string, dto: ReceiveInboundOrderDto): Promise<{
        warehouse: {
            id: string;
            code: string;
            name: string;
        } | null;
        client: {
            id: string;
            code: string;
            name: string;
        };
        createdByActor: {
            id: string;
            user: {
                id: string;
                email: string;
            } | null;
            actorType: import(".prisma/client").$Enums.ActorType;
            clientAccount: {
                id: string;
                email: string;
            } | null;
        };
        items: ({
            uom: {
                id: string;
                code: string;
                name: string;
            };
            batches: ({
                location: {
                    id: string;
                    code: string;
                } | null;
                batch: {
                    id: string;
                    batchCode: string;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                batchId: string | null;
                locationId: string | null;
                qtyReceived: import("@prisma/client/runtime/library").Decimal;
                inboundOrderItemId: string;
            })[];
            product: {
                id: string;
                name: string;
                sku: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            qtyReceived: import("@prisma/client/runtime/library").Decimal;
            inboundOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedDate: Date | null;
        createdByActorId: string;
    }>;
}
