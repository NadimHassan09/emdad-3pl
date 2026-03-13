import { OutboundOrdersService } from './outbound-orders.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { StockReservationsService } from '../stock-reservations/stock-reservations.service';
import { CreateReservationDto } from '../stock-reservations/dto/create-reservation.dto';
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
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        warehouseId: string;
        orderNumber: string | null;
        currentStage: string | null;
        createdByActorId: string;
        expectedShipDate: Date | null;
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
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            outboundOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        warehouseId: string;
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
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
                outboundOrderItemId: string;
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
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            outboundOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        warehouseId: string;
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
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            outboundOrderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        clientId: string;
        warehouseId: string;
        orderNumber: string | null;
        currentStage: string | null;
        createdByActorId: string;
        expectedShipDate: Date | null;
    }>;
    addItem(orderId: string, dto: AddOutboundOrderItemDto): Promise<{
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
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
        outboundOrderId: string;
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
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
        allocations: ({
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
            outboundOrderItem: {
                id: string;
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
                qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.AllocationStatus;
            clientId: string;
            warehouseId: string;
            productId: string;
            batchId: string | null;
            locationId: string | null;
            outboundOrderItemId: string;
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            stockReservationId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        clientId: string;
        warehouseId: string;
        outboundOrderId: string;
    }>;
}
