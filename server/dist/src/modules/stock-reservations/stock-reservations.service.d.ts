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
    private validateStockAvailability;
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
    shipOrder(outboundOrderId: string, dto: ShipOrderDto): Promise<{
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
        items: ({
            product: {
                id: string;
                name: string;
                sku: string;
            };
            uom: {
                id: string;
                name: string;
                code: string;
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
                outboundOrderItemId: string;
                batchId: string | null;
                locationId: string | null;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
            })[];
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
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
    autoShipFullOrder(outboundOrderId: string): Promise<{
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
        items: ({
            product: {
                id: string;
                name: string;
                sku: string;
            };
            uom: {
                id: string;
                name: string;
                code: string;
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
                outboundOrderItemId: string;
                batchId: string | null;
                locationId: string | null;
                qtyShipped: import("@prisma/client/runtime/library").Decimal;
            })[];
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
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        clientId: string;
        warehouseId: string;
        orderNumber: string | null;
        currentStage: string | null;
        expectedShipDate: Date | null;
        createdByActorId: string;
    }>;
}
