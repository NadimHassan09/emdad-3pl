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
exports.InboundOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const inventory_service_1 = require("../inventory/inventory.service");
const movement_type_enum_1 = require("../../common/enums/movement-type.enum");
const actor_type_enum_1 = require("../../common/enums/actor-type.enum");
let InboundOrdersService = class InboundOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto, payload) {
        const resolvedClientId = payload.actorType === actor_type_enum_1.ActorType.CLIENT_ACCOUNT ? payload.clientId : dto.clientId;
        if (!resolvedClientId) {
            throw new common_1.BadRequestException('clientId is required');
        }
        await this.prisma.client.findUniqueOrThrow({ where: { id: resolvedClientId } });
        let resolvedWarehouseId = dto.warehouseId;
        if (!resolvedWarehouseId) {
            const fallbackWarehouse = await this.prisma.warehouse.findFirst({
                select: { id: true },
                orderBy: { createdAt: 'asc' },
            });
            if (!fallbackWarehouse) {
                throw new common_1.BadRequestException('No warehouse configured yet. Admin must create a warehouse first.');
            }
            resolvedWarehouseId = fallbackWarehouse.id;
        }
        await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: resolvedWarehouseId },
        });
        return this.prisma.inboundOrder.create({
            data: {
                clientId: resolvedClientId,
                warehouseId: resolvedWarehouseId,
                orderNumber: dto.orderNumber?.trim(),
                currentStage: payload.actorType === actor_type_enum_1.ActorType.CLIENT_ACCOUNT
                    ? 'PENDING_ADMIN_REVIEW'
                    : dto.currentStage?.trim(),
                status: payload.actorType === actor_type_enum_1.ActorType.CLIENT_ACCOUNT
                    ? 'PENDING'
                    : undefined,
                expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
                createdByActorId: payload.actorId,
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
    async findMany(filter, payload) {
        const where = {};
        if (payload?.actorType === actor_type_enum_1.ActorType.CLIENT_ACCOUNT &&
            payload.clientId) {
            where.clientId = payload.clientId;
        }
        else if (filter?.clientId) {
            where.clientId = filter.clientId;
        }
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
        return this.prisma.inboundOrder.findMany({
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
    }
    async findOne(id, payload) {
        const where = { id };
        if (payload?.actorType === actor_type_enum_1.ActorType.CLIENT_ACCOUNT &&
            payload.clientId) {
            where.clientId = payload.clientId;
        }
        const order = await this.prisma.inboundOrder.findFirst({
            where,
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
            throw new common_1.NotFoundException('Inbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.inboundOrder.update({
            where: { id },
            data: {
                ...(dto.orderNumber !== undefined && {
                    orderNumber: dto.orderNumber?.trim(),
                }),
                ...(dto.status !== undefined && { status: dto.status }),
                ...(dto.currentStage !== undefined && {
                    currentStage: dto.currentStage?.trim(),
                }),
                ...(dto.expectedDate !== undefined && {
                    expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
                }),
                ...(dto.warehouseId !== undefined && {
                    warehouseId: dto.warehouseId,
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
        return this.prisma.inboundOrderItem.create({
            data: {
                inboundOrderId: orderId,
                productId: dto.productId,
                qtyOrdered: dto.qtyOrdered,
                uomId: dto.uomId,
            },
            include: {
                product: { select: { id: true, sku: true, name: true } },
                uom: { select: { id: true, code: true, name: true } },
            },
        });
    }
    async receive(orderId, dto) {
        const order = await this.findOne(orderId);
        const item = await this.prisma.inboundOrderItem.findUnique({
            where: { id: dto.itemId },
            include: {
                product: true,
                batches: true,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException('Inbound order item not found');
        }
        if (item.inboundOrderId !== orderId) {
            throw new common_1.BadRequestException('Item does not belong to this inbound order');
        }
        const totalQtyReceived = dto.batches.reduce((sum, batch) => sum + batch.qtyReceived, 0);
        const qtyRemaining = (typeof item.qtyOrdered === 'number'
            ? item.qtyOrdered
            : item.qtyOrdered.toNumber()) -
            (typeof item.qtyReceived === 'number'
                ? item.qtyReceived
                : item.qtyReceived.toNumber());
        if (totalQtyReceived > qtyRemaining) {
            throw new common_1.BadRequestException(`Cannot receive ${totalQtyReceived}. Remaining: ${qtyRemaining}`);
        }
        const createdBatches = [];
        for (const batchDto of dto.batches) {
            let batchId = batchDto.batchId;
            if (!batchId && batchDto.batchCode) {
                const newBatch = await this.prisma.batch.create({
                    data: {
                        productId: item.productId,
                        batchCode: batchDto.batchCode.trim(),
                        lotNumber: batchDto.lotNumber?.trim(),
                        supplierBatchCode: batchDto.supplierBatchCode?.trim(),
                        expiryDate: batchDto.expiryDate
                            ? new Date(batchDto.expiryDate)
                            : null,
                        manufacturingDate: batchDto.manufacturingDate
                            ? new Date(batchDto.manufacturingDate)
                            : null,
                        receivedDate: batchDto.receivedDate
                            ? new Date(batchDto.receivedDate)
                            : new Date(),
                        batchStatus: 'AVAILABLE',
                    },
                });
                batchId = newBatch.id;
            }
            if (!batchId) {
                throw new common_1.BadRequestException('Either batchId or batchCode must be provided');
            }
            const batch = await this.prisma.batch.findUnique({
                where: { id: batchId },
            });
            if (batch?.productId !== item.productId) {
                throw new common_1.BadRequestException('Batch does not belong to the order item product');
            }
            if (batchDto.locationId) {
                const location = await this.prisma.location.findUnique({
                    where: { id: batchDto.locationId },
                });
                if (location?.warehouseId !== order.warehouseId) {
                    throw new common_1.BadRequestException('Location does not belong to the order warehouse');
                }
            }
            await this.prisma.inboundOrderItemBatch.create({
                data: {
                    inboundOrderItemId: dto.itemId,
                    batchId,
                    locationId: batchDto.locationId || null,
                    qtyReceived: batchDto.qtyReceived,
                },
            });
            await this.inventoryService.createLedgerEntry({
                clientId: order.clientId,
                warehouseId: order.warehouseId,
                productId: item.productId,
                batchId: batchId,
                locationId: batchDto.locationId,
                movementType: movement_type_enum_1.MovementType.RECEIPT,
                qtyChange: batchDto.qtyReceived,
                referenceType: 'INBOUND_ORDER',
                referenceId: orderId,
            });
            createdBatches.push({
                batchId,
                locationId: batchDto.locationId,
            });
        }
        const newQtyReceived = (typeof item.qtyReceived === 'number'
            ? item.qtyReceived
            : item.qtyReceived.toNumber()) + totalQtyReceived;
        await this.prisma.inboundOrderItem.update({
            where: { id: dto.itemId },
            data: { qtyReceived: newQtyReceived },
        });
        const allItems = await this.prisma.inboundOrderItem.findMany({
            where: { inboundOrderId: orderId },
        });
        const allReceived = allItems.every((i) => {
            const ordered = typeof i.qtyOrdered === 'number'
                ? i.qtyOrdered
                : i.qtyOrdered.toNumber();
            const received = typeof i.qtyReceived === 'number'
                ? i.qtyReceived
                : i.qtyReceived.toNumber();
            return received >= ordered;
        });
        if (allReceived && order.status !== 'COMPLETED') {
            await this.prisma.inboundOrder.update({
                where: { id: orderId },
                data: { status: 'COMPLETED' },
            });
        }
        else if (order.status === 'DRAFT' || order.status === 'PENDING') {
            await this.prisma.inboundOrder.update({
                where: { id: orderId },
                data: { status: 'RECEIVING' },
            });
        }
        return this.findOne(orderId);
    }
};
exports.InboundOrdersService = InboundOrdersService;
exports.InboundOrdersService = InboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], InboundOrdersService);
//# sourceMappingURL=inbound-orders.service.js.map