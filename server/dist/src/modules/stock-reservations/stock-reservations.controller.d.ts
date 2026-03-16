import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
export declare class StockReservationsController {
    private readonly stockReservations;
    constructor(stockReservations: StockReservationsService);
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
            warehouseId: string;
            status: import(".prisma/client").$Enums.AllocationStatus;
            clientId: string;
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
        warehouseId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        clientId: string;
        outboundOrderId: string;
    }>;
    confirm(id: string): Promise<{
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
            warehouseId: string;
            status: import(".prisma/client").$Enums.AllocationStatus;
            clientId: string;
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
        warehouseId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        clientId: string;
        outboundOrderId: string;
    }>;
    release(id: string): Promise<{
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
            warehouseId: string;
            status: import(".prisma/client").$Enums.AllocationStatus;
            clientId: string;
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
        warehouseId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        clientId: string;
        outboundOrderId: string;
    }>;
    pickAllocation(id: string, dto: PickAllocationDto): Promise<{
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
        stockReservation: {
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
            status: import(".prisma/client").$Enums.ReservationStatus;
            clientId: string;
            outboundOrderId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        warehouseId: string;
        status: import(".prisma/client").$Enums.AllocationStatus;
        clientId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        outboundOrderItemId: string;
        reservedQty: import("@prisma/client/runtime/library").Decimal;
        pickedQty: import("@prisma/client/runtime/library").Decimal;
        shippedQty: import("@prisma/client/runtime/library").Decimal;
        stockReservationId: string;
    }>;
}
