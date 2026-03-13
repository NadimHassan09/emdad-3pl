import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
export declare class StockReservationsController {
    private readonly stockReservations;
    constructor(stockReservations: StockReservationsService);
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
        outboundOrder: {
            status: import(".prisma/client").$Enums.OrderStatus;
            id: string;
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
            clientId: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.AllocationStatus;
            id: string;
            updatedAt: Date;
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
        clientId: string;
        createdAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        id: string;
        updatedAt: Date;
        warehouseId: string;
        outboundOrderId: string;
    }>;
    confirm(id: string): Promise<{
        client: {
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
            status: import(".prisma/client").$Enums.OrderStatus;
            id: string;
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
            clientId: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.AllocationStatus;
            id: string;
            updatedAt: Date;
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
        clientId: string;
        createdAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        id: string;
        updatedAt: Date;
        warehouseId: string;
        outboundOrderId: string;
    }>;
    release(id: string): Promise<{
        client: {
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
            status: import(".prisma/client").$Enums.OrderStatus;
            id: string;
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
            clientId: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.AllocationStatus;
            id: string;
            updatedAt: Date;
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
        clientId: string;
        createdAt: Date;
        status: import(".prisma/client").$Enums.ReservationStatus;
        id: string;
        updatedAt: Date;
        warehouseId: string;
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
                status: import(".prisma/client").$Enums.OrderStatus;
                id: string;
                orderNumber: string | null;
            };
        } & {
            clientId: string;
            createdAt: Date;
            status: import(".prisma/client").$Enums.ReservationStatus;
            id: string;
            updatedAt: Date;
            warehouseId: string;
            outboundOrderId: string;
        };
    } & {
        clientId: string;
        createdAt: Date;
        status: import(".prisma/client").$Enums.AllocationStatus;
        id: string;
        updatedAt: Date;
        warehouseId: string;
        productId: string;
        batchId: string | null;
        locationId: string | null;
        reservedQty: import("@prisma/client/runtime/library").Decimal;
        pickedQty: import("@prisma/client/runtime/library").Decimal;
        shippedQty: import("@prisma/client/runtime/library").Decimal;
        outboundOrderItemId: string;
        stockReservationId: string;
    }>;
}
