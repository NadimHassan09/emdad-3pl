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
exports.OutboundOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
function toNumber(value) {
    if (typeof value === 'number' && !Number.isNaN(value))
        return value;
    if (value != null && typeof value === 'object' && typeof value.toNumber === 'function')
        return value.toNumber();
    if (value != null && typeof value.toString === 'function')
        return parseFloat(value.toString()) || 0;
    return 0;
}
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, createdByActorId) {
        await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
        await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: dto.warehouseId },
        });
        return this.prisma.outboundOrder.create({
            data: {
                clientId: dto.clientId,
                warehouseId: dto.warehouseId,
                orderNumber: dto.orderNumber?.trim(),
                currentStage: dto.currentStage?.trim(),
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
                createdByActorId,
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                createdByActor: {
                    select: {
                        id: true,
                        actorType: true,
                        user: { select: { id: true, email: true } },
                        clientAccount: { select: { id: true, email: true } },
                    },
                },
            },
        });
    }
    async findMany(filter) {
        try {
            const where = {};
            if (filter?.clientId)
                where.clientId = filter.clientId;
            if (filter?.warehouseId)
                where.warehouseId = filter.warehouseId;
            if (filter?.status)
                where.status = filter.status;
            if (filter?.orderNumber) {
                where.orderNumber = {
                    contains: filter.orderNumber,
                    mode: 'insensitive',
                };
            }
            if (filter?.expectedShipDateFrom || filter?.expectedShipDateTo) {
                where.expectedShipDate = {};
                if (filter.expectedShipDateFrom)
                    where.expectedShipDate.gte = new Date(filter.expectedShipDateFrom);
                if (filter.expectedShipDateTo)
                    where.expectedShipDate.lte = new Date(filter.expectedShipDateTo);
            }
            const rows = await this.prisma.outboundOrder.findMany({
                where,
                include: {
                    client: { select: { id: true, code: true, name: true } },
                    warehouse: { select: { id: true, code: true, name: true } },
                    items: {
                        include: {
                            product: { select: { id: true, sku: true, name: true } },
                            uom: { select: { id: true, code: true, name: true } },
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
            });
            return rows.map((order) => this.serializeOrder(order));
        }
        catch (e) {
            console.error('[OutboundOrdersService] findMany failed:', e);
            return [];
        }
    }
    serializeOrder(order) {
        return {
            ...order,
            items: (order.items || []).map((item) => ({
                ...item,
                qtyOrdered: toNumber(item.qtyOrdered),
                qtyShipped: toNumber(item.qtyShipped),
            })),
        };
    }
    async findOne(id) {
        const order = await this.prisma.outboundOrder.findUnique({
            where: { id },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                createdByActor: {
                    select: {
                        id: true,
                        actorType: true,
                        user: { select: { id: true, email: true } },
                        clientAccount: { select: { id: true, email: true } },
                    },
                },
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
        if (!order)
            throw new common_1.NotFoundException('Outbound order not found');
        return this.serializeOrder(order);
    }
    async update(id, dto) {
        await this.findOne(id);
        const updated = await this.prisma.outboundOrder.update({
            where: { id },
            data: {
                ...(dto.orderNumber !== undefined && {
                    orderNumber: dto.orderNumber?.trim(),
                }),
                ...(dto.status !== undefined && { status: dto.status }),
                ...(dto.currentStage !== undefined && {
                    currentStage: dto.currentStage?.trim(),
                }),
                ...(dto.expectedShipDate !== undefined && {
                    expectedShipDate: dto.expectedShipDate
                        ? new Date(dto.expectedShipDate)
                        : null,
                }),
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                items: {
                    include: {
                        product: { select: { id: true, sku: true, name: true } },
                        uom: { select: { id: true, code: true, name: true } },
                    },
                },
            },
        });
        return this.serializeOrder(updated);
    }
    async addItem(orderId, dto) {
        const order = await this.findOne(orderId);
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        await this.prisma.uom.findUniqueOrThrow({ where: { id: dto.uomId } });
        const product = await this.prisma.product.findUnique({
            where: { id: dto.productId },
        });
        if (product?.clientId !== order.clientId) {
            throw new common_1.BadRequestException('Product does not belong to the order client');
        }
        const item = await this.prisma.outboundOrderItem.create({
            data: {
                outboundOrderId: orderId,
                productId: dto.productId,
                qtyOrdered: dto.qtyOrdered,
                uomId: dto.uomId,
            },
            include: {
                product: { select: { id: true, sku: true, name: true } },
                uom: { select: { id: true, code: true, name: true } },
            },
        });
        return {
            ...item,
            qtyOrdered: toNumber(item.qtyOrdered),
            qtyShipped: toNumber(item.qtyShipped),
        };
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
//# sourceMappingURL=outbound-orders.service.js.map