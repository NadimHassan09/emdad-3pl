import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class StockReservationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    private validateStockAvailability;
}
