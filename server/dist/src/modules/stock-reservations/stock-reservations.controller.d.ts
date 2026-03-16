import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
export declare class StockReservationsController {
    private readonly stockReservations;
    constructor(stockReservations: StockReservationsService);
    findOne(id: string): Promise<{
        client: {
            id: string;
            name: string;
            code: string;
        };
        warehouse: {
            id: string;
            name: string;
            code: string;
        };
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
        allocations: ({
            outboundOrderItem: {
                id: string;
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
                qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            };
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
            status: import(".prisma/client").$Enums.AllocationStatus;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            warehouseId: string;
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
            productId: string;
            batchId: string | null;
            locationId: string | null;
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
    confirm(id: string): Promise<{
        client: {
            id: string;
            name: string;
            code: string;
        };
        warehouse: {
            id: string;
            name: string;
            code: string;
        };
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
        allocations: ({
            outboundOrderItem: {
                id: string;
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
                qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            };
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
            status: import(".prisma/client").$Enums.AllocationStatus;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            warehouseId: string;
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
            productId: string;
            batchId: string | null;
            locationId: string | null;
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
    release(id: string): Promise<{
        client: {
            id: string;
            name: string;
            code: string;
        };
        warehouse: {
            id: string;
            name: string;
            code: string;
        };
        outboundOrder: {
            id: string;
            status: import(".prisma/client").$Enums.OrderStatus;
            orderNumber: string | null;
        };
        allocations: ({
            outboundOrderItem: {
                id: string;
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
                qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            };
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
            status: import(".prisma/client").$Enums.AllocationStatus;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            warehouseId: string;
            reservedQty: import("@prisma/client/runtime/library").Decimal;
            pickedQty: import("@prisma/client/runtime/library").Decimal;
            shippedQty: import("@prisma/client/runtime/library").Decimal;
            outboundOrderItemId: string;
            productId: string;
            batchId: string | null;
            locationId: string | null;
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
    pickAllocation(id: string, dto: PickAllocationDto): Promise<{
        outboundOrderItem: {
            id: string;
            product: {
                id: string;
                name: string;
                sku: string;
            };
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
        };
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
        stockReservation: {
            outboundOrder: {
                id: string;
                status: import(".prisma/client").$Enums.OrderStatus;
                orderNumber: string | null;
            };
        } & {
            id: string;
            status: import(".prisma/client").$Enums.ReservationStatus;
            createdAt: Date;
            updatedAt: Date;
            clientId: string;
            warehouseId: string;
            outboundOrderId: string;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.AllocationStatus;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        reservedQty: import("@prisma/client/runtime/library").Decimal;
        pickedQty: import("@prisma/client/runtime/library").Decimal;
        shippedQty: import("@prisma/client/runtime/library").Decimal;
        outboundOrderItemId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        stockReservationId: string;
    }>;
}
