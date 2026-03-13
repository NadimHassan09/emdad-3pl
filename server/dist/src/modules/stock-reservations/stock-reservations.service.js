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
let StockReservationsService = class StockReservationsService {
    constructor(prisma) {
        this.prisma = prisma;
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
        const orderItemIds = new Set(order.items.map((item) => item.id));
        for (const allocation of dto.allocations) {
            if (!orderItemIds.has(allocation.outboundOrderItemId)) {
                throw new common_1.BadRequestException(`Order item ${allocation.outboundOrderItemId} does not belong to order ${outboundOrderId}`);
            }
        }
        await this.validateStockAvailability(order.clientId, order.warehouseId, dto.allocations);
        return this.prisma.stockReservation.create({
            data: {
                clientId: order.clientId,
                warehouseId: order.warehouseId,
                outboundOrderId: order.id,
                status: 'DRAFT',
                allocations: {
                    create: dto.allocations.map((alloc) => ({
                        outboundOrderItemId: alloc.outboundOrderItemId,
                        clientId: order.clientId,
                        warehouseId: order.warehouseId,
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
};
exports.StockReservationsService = StockReservationsService;
exports.StockReservationsService = StockReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StockReservationsService);
//# sourceMappingURL=stock-reservations.service.js.map