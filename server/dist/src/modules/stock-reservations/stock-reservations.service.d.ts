import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { InventoryService } from '../inventory/inventory.service';
export declare class StockReservationsService {
    private readonly prisma;
    private readonly inventoryService;
    constructor(prisma: PrismaService, inventoryService: InventoryService);
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
    private validateStockAvailability;
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
                createdAt: Date;
                id: string;
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
            createdAt: Date;
            id: string;
            updatedAt: Date;
            productId: string;
            qtyOrdered: import("@prisma/client/runtime/library").Decimal;
            uomId: string;
            outboundOrderId: string;
            qtyShipped: import("@prisma/client/runtime/library").Decimal;
        })[];
    } & {
        clientId: string;
        createdAt: Date;
        status: import(".prisma/client").$Enums.OrderStatus;
        id: string;
        updatedAt: Date;
        warehouseId: string;
        orderNumber: string | null;
        currentStage: string | null;
        createdByActorId: string;
        expectedShipDate: Date | null;
    }>;
}
