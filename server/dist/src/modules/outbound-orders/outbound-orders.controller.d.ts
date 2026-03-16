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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    findMany(filter: OutboundOrderFilterDto, payload: JwtPayload): Promise<({
        client: {
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    })[]>;
    findOne(id: string, payload: JwtPayload): Promise<{
        client: {
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
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
        outboundOrderId: string;
        qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
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
                outboundOrderItemId: string;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
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
            outboundOrderId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
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
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
