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
const billing_service_1 = require("../billing/billing.service");
const movement_type_enum_1 = require("../../common/enums/movement-type.enum");
const approvals_service_1 = require("../approvals/approvals.service");
const approval_reference_type_enum_1 = require("../../common/enums/approval-reference-type.enum");
function toNumber(value) {
    if (typeof value === 'number' && !Number.isNaN(value))
        return value;
    if (value != null && typeof value === 'object' && typeof value.toNumber === 'function')
        return value.toNumber();
    if (value != null && typeof value.toString === 'function')
        return parseFloat(value.toString()) || 0;
    return 0;
}
let InboundOrdersService = class InboundOrdersService {
    constructor(prisma, inventoryService, billingService, approvalsService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
        this.billingService = billingService;
        this.approvalsService = approvalsService;
    }
    async create(dto, createdByActorId) {
        await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
        await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: dto.warehouseId },
        });
        return this.prisma.inboundOrder.create({
            data: {
                clientId: dto.clientId,
                warehouseId: dto.warehouseId,
                orderNumber: dto.orderNumber?.trim(),
                currentStage: dto.currentStage?.trim(),
                expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
                status: 'IN_PROGRESS',
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
            if (filter?.expectedDateFrom || filter?.expectedDateTo) {
                where.expectedDate = {};
                if (filter.expectedDateFrom)
                    where.expectedDate.gte = new Date(filter.expectedDateFrom);
                if (filter.expectedDateTo)
                    where.expectedDate.lte = new Date(filter.expectedDateTo);
            }
            const rows = await this.prisma.inboundOrder.findMany({
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
            return rows.map((order) => ({
                ...order,
                items: (order.items || []).map((item) => ({
                    ...item,
                    qtyOrdered: toNumber(item.qtyOrdered),
                    qtyReceived: toNumber(item.qtyReceived),
                })),
            }));
        }
        catch (e) {
            console.error('[InboundOrdersService] findMany failed:', e);
            return [];
        }
    }
    findManyForClientPortal(clientId, filter) {
        const f = filter ? { ...filter } : {};
        delete f.clientId;
        return this.findMany({ ...f, clientId });
    }
    async findOneForClientPortal(clientId, ref) {
        const trimmed = ref.trim();
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(trimmed);
        const fullInclude = {
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
        };
        let order = await this.prisma.inboundOrder.findFirst({
            where: isUuid
                ? { id: trimmed, clientId }
                : { clientId, orderNumber: trimmed },
            include: fullInclude,
        });
        if (!order && !isUuid) {
            order = await this.prisma.inboundOrder.findFirst({
                where: {
                    clientId,
                    orderNumber: { contains: trimmed, mode: 'insensitive' },
                },
                orderBy: { createdAt: 'desc' },
                include: fullInclude,
            });
        }
        if (!order)
            throw new common_1.NotFoundException('Inbound order not found');
        return this.serializeOrder(order);
    }
    async createForClientPortal(clientId, actorId, dto) {
        await this.prisma.client.findUniqueOrThrow({ where: { id: clientId } });
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        const order = await this.prisma.inboundOrder.create({
            data: {
                clientId,
                warehouseId: dto.warehouseId ?? null,
                currentStage: dto.currentStage?.trim(),
                expectedDate: dto.expectedDate ? new Date(dto.expectedDate) : null,
                status: 'PENDING',
                createdByActorId: actorId,
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
        await this.approvalsService.createRequest({
            referenceType: approval_reference_type_enum_1.ApprovalReferenceType.ORDER,
            referenceId: order.id,
            requestedByActorId: actorId,
            approvalStep: 'INBOUND_ORDER',
        });
        return order;
    }
    async addItemForClientPortal(clientId, orderId, dto) {
        const owned = await this.prisma.inboundOrder.findFirst({
            where: { id: orderId, clientId },
            select: { id: true },
        });
        if (!owned) {
            throw new common_1.ForbiddenException('Order not found or access denied');
        }
        return this.addItem(orderId, dto);
    }
    async findOne(id) {
        const order = await this.prisma.inboundOrder.findUnique({
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
            throw new common_1.NotFoundException('Inbound order not found');
        return this.serializeOrder(order);
    }
    serializeOrder(order) {
        return {
            ...order,
            items: (order.items || []).map((item) => ({
                ...item,
                qtyOrdered: toNumber(item.qtyOrdered),
                qtyReceived: toNumber(item.qtyReceived),
                batches: (item.batches || []).map((b) => ({
                    ...b,
                    qtyReceived: toNumber(b.qtyReceived),
                })),
            })),
        };
    }
    async update(id, dto) {
        await this.findOne(id);
        const updated = await this.prisma.inboundOrder.update({
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
        const item = await this.prisma.inboundOrderItem.create({
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
        return {
            ...item,
            qtyOrdered: toNumber(item.qtyOrdered),
            qtyReceived: toNumber(item.qtyReceived),
        };
    }
    async receive(orderId, dto) {
        const order = await this.findOne(orderId);
        const warehouseId = order.warehouseId;
        if (!warehouseId) {
            throw new common_1.BadRequestException('يجب تعيين المستودع للطلب قبل استلام البضاعة. يرجى تعيين المستودع أولاً.');
        }
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
                if (location?.warehouseId !== warehouseId) {
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
                warehouseId,
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
        await this.billingService.recordInboundReceiveCharge(orderId, dto.itemId, order.clientId, item.productId, totalQtyReceived);
        return this.findOne(orderId);
    }
};
exports.InboundOrdersService = InboundOrdersService;
exports.InboundOrdersService = InboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService,
        billing_service_1.BillingService,
        approvals_service_1.ApprovalsService])
], InboundOrdersService);
//# sourceMappingURL=inbound-orders.service.js.map