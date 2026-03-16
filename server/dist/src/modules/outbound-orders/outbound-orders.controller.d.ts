import { OutboundOrdersService } from './outbound-orders.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { StockReservationsService } from '../stock-reservations/stock-reservations.service';
import { CreateReservationDto } from '../stock-reservations/dto/create-reservation.dto';
import { ShipOrderDto } from '../stock-reservations/dto/ship-order.dto';
export declare class OutboundOrdersController {
    private readonly outboundOrders;
    private readonly stockReservations;
    constructor(outboundOrders: OutboundOrdersService, stockReservations: StockReservationsService);
    create(dto: CreateOutboundOrderDto, payload: JwtPayload): Promise<{
        client: {
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
        expectedShipDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto): Promise<({
        client: {
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
            outboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedShipDate: Date | null;
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
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
                outboundOrderItemId: string;
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
            outboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedShipDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
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
            createdAt: Date;
            updatedAt: Date;
            outboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedShipDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    addItem(orderId: string, dto: AddOutboundOrderItemDto): Promise<{
        qtyOrdered: number;
        qtyShipped: number;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        outboundOrderId: string;
        productId: string;
        uomId: string;
    }>;
    createReservation(outboundOrderId: string, dto: CreateReservationDto): Promise<{
        client: {
            id: string;
            code: string;
            name: string;
        };
        warehouse: {
            id: string;
            code: string;
            name: string;
        };
        outboundOrder: {
            id: string;
            orderNumber: string | null;
            status: import(".prisma/client").$Enums.OrderStatus;
        };
        allocations: ({
            product: {
                id: string;
                name: string;
                sku: string;
            };
            outboundOrderItem: {
                id: string;
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
                qtyOrdered: import("@prisma/client/runtime/library").Decimal;
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
            status: import(".prisma/client").$Enums.AllocationStatus;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            warehouseId: string;
            productId: string;
            outboundOrderItemId: string;
            batchId: string | null;
            locationId: string | null;
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            stockReservationId: string;
        })[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        outboundOrderId: string;
    }>;
    shipOrder(outboundOrderId: string, dto: ShipOrderDto): Promise<{
        client: {
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
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
                outboundOrderItemId: string;
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
            outboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedShipDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
    shipAll(outboundOrderId: string): Promise<{
        client: {
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
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
                outboundOrderItemId: string;
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
            outboundOrderId: string;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
        })[];
    } & {
        id: string;
        orderNumber: string | null;
        status: import(".prisma/client").$Enums.OrderStatus;
        currentStage: string | null;
        expectedShipDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        createdByActorId: string;
    }>;
}
