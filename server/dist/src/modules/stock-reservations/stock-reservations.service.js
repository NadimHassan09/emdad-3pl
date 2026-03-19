"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockReservationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const allocation_status_enum_1 = require("../../common/enums/allocation-status.enum");
const inventory_service_1 = require("../inventory/inventory.service");
const movement_type_enum_1 = require("../../common/enums/movement-type.enum");
const order_status_enum_1 = require("../../common/enums/order-status.enum");
let StockReservationsService = class StockReservationsService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async createReservation(outboundOrderId, dto) {
        const order = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: outboundOrderId },
            include: {
                items: true,
                client: true,
                warehouse: true,
            },
        });
        const warehouseId = order.warehouseId;
        if (!warehouseId) {
            throw new common_1.BadRequestException('Outbound order must have a warehouse assigned before creating a reservation');
        }
        const orderItemIds = new Set(order.items.map((item) => item.id));
        for (const allocation of dto.allocations) {
            if (!orderItemIds.has(allocation.outboundOrderItemId)) {
                throw new common_1.BadRequestException(`Order item ${allocation.outboundOrderItemId} does not belong to order ${outboundOrderId}`);
            }
        }
        await this.validateStockAvailability(order.clientId, warehouseId, dto.allocations);
        return this.prisma.stockReservation.create({
            data: {
                clientId: order.clientId,
                warehouseId,
                outboundOrderId: order.id,
                status: 'DRAFT',
                allocations: {
                    create: dto.allocations.map((alloc) => ({
                        outboundOrderItemId: alloc.outboundOrderItemId,
                        clientId: order.clientId,
                        warehouseId,
                        productId: alloc.productId,
                        batchId: alloc.batchId,
                        locationId: alloc.locationId,
                        reservedQty: alloc.reservedQty,
                        pickedQty: 0,
                        shippedQty: 0,
                        status: 'RESERVED',
                    })),
                },
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                outboundOrder: {
                    select: {
                        id: true,
                        orderNumber: true,
                        status: true,
                    },
                },
                allocations: {
                    include: {
                        outboundOrderItem: {
                            select: {
                                id: true,
                                qtyOrdered: true,
                                product: { select: { id: true, sku: true, name: true } },
                            },
                        },
                        product: { select: { id: true, sku: true, name: true } },
                        batch: { select: { id: true, batchCode: true } },
                        location: { select: { id: true, code: true } },
                    },
                },
            },
        });
    }
    async findOne(id) {
        const reservation = await this.prisma.stockReservation.findUnique({
            where: { id },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                outboundOrder: {
                    select: {
                        id: true,
                        orderNumber: true,
                        status: true,
                    },
                },
                allocations: {
                    include: {
                        outboundOrderItem: {
                            select: {
                                id: true,
                                qtyOrdered: true,
                                product: { select: { id: true, sku: true, name: true } },
                            },
                        },
                        product: { select: { id: true, sku: true, name: true } },
                        batch: { select: { id: true, batchCode: true } },
                        location: { select: { id: true, code: true } },
                    },
                },
            },
        });
        if (!reservation) {
            throw new common_1.NotFoundException('Stock reservation not found');
        }
        return reservation;
    }
    async confirm(id) {
        const reservation = await this.findOne(id);
        if (reservation.status === 'CONFIRMED') {
            throw new common_1.BadRequestException('Reservation is already confirmed');
        }
        if (reservation.status === 'RELEASED') {
            throw new common_1.BadRequestException('Cannot confirm a released reservation');
        }
        if (reservation.status === 'CANCELLED') {
            throw new common_1.BadRequestException('Cannot confirm a cancelled reservation');
        }
        const allocations = await this.prisma.outboundAllocation.findMany({
            where: { stockReservationId: id },
        });
        await this.validateStockAvailability(reservation.clientId, reservation.warehouseId, allocations.map((alloc) => ({
            outboundOrderItemId: alloc.outboundOrderItemId,
            productId: alloc.productId,
            batchId: alloc.batchId || undefined,
            locationId: alloc.locationId || undefined,
            reservedQty: alloc.reservedQty.toNumber(),
        })));
        return this.prisma.stockReservation.update({
            where: { id },
            data: {
                status: 'CONFIRMED',
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                outboundOrder: {
                    select: {
                        id: true,
                        orderNumber: true,
                        status: true,
                    },
                },
                allocations: {
                    include: {
                        outboundOrderItem: {
                            select: {
                                id: true,
                                qtyOrdered: true,
                                product: { select: { id: true, sku: true, name: true } },
                            },
                        },
                        product: { select: { id: true, sku: true, name: true } },
                        batch: { select: { id: true, batchCode: true } },
                        location: { select: { id: true, code: true } },
                    },
                },
            },
        });
    }
    async release(id) {
        const reservation = await this.findOne(id);
        if (reservation.status === 'RELEASED') {
            throw new common_1.BadRequestException('Reservation is already released');
        }
        if (reservation.status === 'CANCELLED') {
            throw new common_1.BadRequestException('Cannot release a cancelled reservation');
        }
        const allocations = await this.prisma.outboundAllocation.findMany({
            where: { stockReservationId: id },
        });
        const hasPickedOrShipped = allocations.some((alloc) => alloc.pickedQty.toNumber() > 0 || alloc.shippedQty.toNumber() > 0);
        if (hasPickedOrShipped) {
            throw new common_1.BadRequestException('Cannot release reservation with picked or shipped allocations');
        }
        return this.prisma.stockReservation.update({
            where: { id },
            data: {
                status: 'RELEASED',
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                outboundOrder: {
                    select: {
                        id: true,
                        orderNumber: true,
                        status: true,
                    },
                },
                allocations: {
                    include: {
                        outboundOrderItem: {
                            select: {
                                id: true,
                                qtyOrdered: true,
                                product: { select: { id: true, sku: true, name: true } },
                            },
                        },
                        product: { select: { id: true, sku: true, name: true } },
                        batch: { select: { id: true, batchCode: true } },
                        location: { select: { id: true, code: true } },
                    },
                },
            },
        });
    }
    async validateStockAvailability(clientId, warehouseId, allocations) {
        const stockMap = new Map();
        for (const alloc of allocations) {
            const key = `${alloc.productId}:${alloc.batchId || 'null'}:${alloc.locationId || 'null'}`;
            const current = stockMap.get(key) || 0;
            stockMap.set(key, current + alloc.reservedQty);
        }
        for (const [key, totalReserved] of stockMap.entries()) {
            const [productId, batchIdStr, locationIdStr] = key.split(':');
            const batchId = batchIdStr === 'null' ? null : batchIdStr;
            const locationId = locationIdStr === 'null' ? null : locationIdStr;
            const where = {
                clientId,
                warehouseId,
                productId,
            };
            if (batchId !== null) {
                where.batchId = batchId;
            }
            else {
                where.batchId = null;
            }
            if (locationId !== null) {
                where.locationId = locationId;
            }
            else {
                where.locationId = null;
            }
            const stock = await this.prisma.currentStock.findFirst({
                where,
            });
            const availableQty = stock ? stock.quantity.toNumber() : 0;
            if (availableQty < totalReserved) {
                throw new common_1.BadRequestException(`Insufficient stock for product ${productId}. Available: ${availableQty}, Required: ${totalReserved}`);
            }
        }
    }
    async pickAllocation(id, dto) {
        const allocation = await this.prisma.outboundAllocation.findUnique({
            where: { id },
            include: {
                stockReservation: {
                    include: {
                        outboundOrder: true,
                    },
                },
                outboundOrderItem: true,
            },
        });
        if (!allocation) {
            throw new common_1.NotFoundException('Outbound allocation not found');
        }
        const reservedQty = allocation.reservedQty.toNumber();
        const currentPickedQty = allocation.pickedQty.toNumber();
        const newPickedQty = dto.pickedQty;
        if (newPickedQty > reservedQty) {
            throw new common_1.BadRequestException(`Picked quantity (${newPickedQty}) cannot exceed reserved quantity (${reservedQty})`);
        }
        if (newPickedQty < currentPickedQty) {
            throw new common_1.BadRequestException(`Picked quantity cannot be decreased. Current: ${currentPickedQty}, Requested: ${newPickedQty}`);
        }
        let newStatus;
        if (newPickedQty === 0) {
            newStatus = allocation_status_enum_1.AllocationStatus.RESERVED;
        }
        else if (newPickedQty < reservedQty) {
            newStatus = allocation_status_enum_1.AllocationStatus.PARTIALLY_PICKED;
        }
        else {
            newStatus = allocation_status_enum_1.AllocationStatus.PICKED;
        }
        const updatedAllocation = await this.prisma.outboundAllocation.update({
            where: { id },
            data: {
                pickedQty: newPickedQty,
                status: newStatus,
            },
            include: {
                stockReservation: {
                    include: {
                        outboundOrder: {
                            select: {
                                id: true,
                                orderNumber: true,
                                status: true,
                            },
                        },
                    },
                },
                outboundOrderItem: {
                    select: {
                        id: true,
                        qtyOrdered: true,
                        product: { select: { id: true, sku: true, name: true } },
                    },
                },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
            },
        });
        return updatedAllocation;
    }
    async shipOrder(outboundOrderId, dto) {
        const order = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: outboundOrderId },
            include: {
                items: true,
                stockReservations: {
                    include: {
                        allocations: true,
                    },
                },
            },
        });
        const orderAllocationIds = new Set();
        for (const reservation of order.stockReservations) {
            for (const allocation of reservation.allocations) {
                orderAllocationIds.add(allocation.id);
            }
        }
        for (const shipAlloc of dto.allocations) {
            if (!orderAllocationIds.has(shipAlloc.allocationId)) {
                throw new common_1.BadRequestException(`Allocation ${shipAlloc.allocationId} does not belong to order ${outboundOrderId}`);
            }
        }
        const updatedAllocations = [];
        for (const shipAlloc of dto.allocations) {
            const allocation = await this.prisma.outboundAllocation.findUniqueOrThrow({
                where: { id: shipAlloc.allocationId },
                include: {
                    outboundOrderItem: true,
                    product: true,
                    batch: true,
                    location: true,
                },
            });
            const pickedQty = allocation.pickedQty.toNumber();
            const currentShippedQty = allocation.shippedQty.toNumber();
            const newShippedQty = shipAlloc.shippedQty;
            if (newShippedQty > pickedQty) {
                throw new common_1.BadRequestException(`Shipped quantity (${newShippedQty}) cannot exceed picked quantity (${pickedQty}) for allocation ${shipAlloc.allocationId}`);
            }
            if (newShippedQty < currentShippedQty) {
                throw new common_1.BadRequestException(`Shipped quantity cannot be decreased. Current: ${currentShippedQty}, Requested: ${newShippedQty}`);
            }
            let newStatus;
            if (newShippedQty === 0) {
                newStatus =
                    allocation.status === 'PICKED'
                        ? allocation_status_enum_1.AllocationStatus.PICKED
                        : allocation_status_enum_1.AllocationStatus.PARTIALLY_PICKED;
            }
            else if (newShippedQty < pickedQty) {
                newStatus = allocation_status_enum_1.AllocationStatus.PARTIALLY_SHIPPED;
            }
            else {
                newStatus = allocation_status_enum_1.AllocationStatus.SHIPPED;
            }
            const updatedAllocation = await this.prisma.outboundAllocation.update({
                where: { id: shipAlloc.allocationId },
                data: {
                    shippedQty: newShippedQty,
                    status: newStatus,
                },
            });
            const batchId = shipAlloc.batchId || allocation.batchId;
            const locationId = shipAlloc.locationId || allocation.locationId;
            if (batchId || locationId) {
                const existingBatch = await this.prisma.outboundOrderItemBatch.findFirst({
                    where: {
                        outboundOrderItemId: allocation.outboundOrderItemId,
                        batchId: batchId || null,
                        locationId: locationId || null,
                    },
                });
                if (existingBatch) {
                    await this.prisma.outboundOrderItemBatch.update({
                        where: { id: existingBatch.id },
                        data: {
                            qtyShipped: newShippedQty,
                        },
                    });
                }
                else {
                    await this.prisma.outboundOrderItemBatch.create({
                        data: {
                            outboundOrderItemId: allocation.outboundOrderItemId,
                            batchId: batchId || null,
                            locationId: locationId || null,
                            qtyShipped: newShippedQty,
                        },
                    });
                }
            }
            const qtyToShip = newShippedQty - currentShippedQty;
            if (qtyToShip > 0) {
                await this.inventoryService.createLedgerEntry({
                    clientId: allocation.clientId,
                    warehouseId: allocation.warehouseId,
                    productId: allocation.productId,
                    batchId: batchId || undefined,
                    locationId: locationId || undefined,
                    movementType: movement_type_enum_1.MovementType.SHIPMENT,
                    qtyChange: -qtyToShip,
                    referenceType: 'OUTBOUND_ORDER',
                    referenceId: outboundOrderId,
                });
            }
            updatedAllocations.push(updatedAllocation);
        }
        const allOrderAllocations = await this.prisma.outboundAllocation.findMany({
            where: {
                stockReservation: {
                    outboundOrderId,
                },
            },
        });
        const itemTotalShippedMap = new Map();
        for (const alloc of allOrderAllocations) {
            const itemId = alloc.outboundOrderItemId;
            const current = itemTotalShippedMap.get(itemId) || 0;
            const shipped = alloc.shippedQty.toNumber();
            itemTotalShippedMap.set(itemId, current + shipped);
        }
        for (const [itemId, totalShippedQty] of itemTotalShippedMap.entries()) {
            await this.prisma.outboundOrderItem.update({
                where: { id: itemId },
                data: { qtyShipped: totalShippedQty },
            });
        }
        const orderItems = await this.prisma.outboundOrderItem.findMany({
            where: { outboundOrderId },
        });
        let allItemsShipped = true;
        let someItemsShipped = false;
        for (const item of orderItems) {
            const qtyOrdered = item.qtyOrdered.toNumber();
            const qtyShipped = item.qtyShipped.toNumber();
            if (qtyShipped > 0) {
                someItemsShipped = true;
            }
            if (qtyShipped < qtyOrdered) {
                allItemsShipped = false;
            }
        }
        let newOrderStatus;
        if (allItemsShipped) {
            newOrderStatus = order_status_enum_1.OrderStatus.SHIPPED;
        }
        else if (someItemsShipped) {
            newOrderStatus = order_status_enum_1.OrderStatus.IN_PROGRESS;
        }
        else {
            newOrderStatus = order.status;
        }
        const updatedOrder = await this.prisma.outboundOrder.update({
            where: { id: outboundOrderId },
            data: {
                status: newOrderStatus,
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                items: {
                    include: {
                        product: { select: { id: true, sku: true, name: true } },
                        uom: { select: { id: true, code: true, name: true } },
                        batches: {
                            include: {
                                batch: { select: { id: true, batchCode: true } },
                                location: { select: { id: true, code: true } },
                            },
                        },
                    },
                },
            },
        });
        return updatedOrder;
    }
    async autoShipFullOrder(outboundOrderId) {
        const allocations = await this.prisma.outboundAllocation.findMany({
            where: {
                stockReservation: {
                    outboundOrderId,
                },
            },
        });
        if (allocations.length === 0) {
            throw new common_1.BadRequestException('No allocations found for this outbound order to ship');
        }
        const payload = {
            allocations: allocations.map((alloc) => ({
                allocationId: alloc.id,
                shippedQty: alloc.pickedQty.toNumber(),
            })),
        };
        return this.shipOrder(outboundOrderId, payload);
    }
};
exports.StockReservationsService = StockReservationsService;
exports.StockReservationsService = StockReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], StockReservationsService);
//# sourceMappingURL=stock-reservations.service.js.map