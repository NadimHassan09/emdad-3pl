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
const actor_type_enum_1 = require("../../common/enums/actor-type.enum");
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let OutboundOrdersService = class OutboundOrdersService {
    constructor(prisma) {
        this.prisma = prisma;
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
        return this.prisma.outboundOrder.create({
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
                expectedShipDate: dto.expectedShipDate
                    ? new Date(dto.expectedShipDate)
                    : null,
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
        return this.prisma.outboundOrder.findMany({
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
        const order = await this.prisma.outboundOrder.findFirst({
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
            throw new common_1.NotFoundException('Outbound order not found');
        return order;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.warehouseId) {
            await this.prisma.warehouse.findUniqueOrThrow({
                where: { id: dto.warehouseId },
            });
        }
        return this.prisma.outboundOrder.update({
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
        const [currentStockAgg, existingOrderQtyAgg] = await Promise.all([
            this.prisma.currentStock.aggregate({
                where: {
                    clientId: order.clientId,
                    productId: dto.productId,
                },
                _sum: {
                    quantity: true,
                },
            }),
            this.prisma.outboundOrderItem.aggregate({
                where: {
                    outboundOrderId: orderId,
                    productId: dto.productId,
                },
                _sum: {
                    qtyOrdered: true,
                },
            }),
        ]);
        const availableQtyRaw = currentStockAgg._sum.quantity;
        const existingQtyRaw = existingOrderQtyAgg._sum.qtyOrdered;
        const availableQty = typeof availableQtyRaw === 'number'
            ? availableQtyRaw
            : availableQtyRaw
                ? availableQtyRaw.toNumber()
                : 0;
        const existingQty = typeof existingQtyRaw === 'number'
            ? existingQtyRaw
            : existingQtyRaw
                ? existingQtyRaw.toNumber()
                : 0;
        const requestedTotal = existingQty + dto.qtyOrdered;
        if (requestedTotal > availableQty) {
            throw new common_1.BadRequestException(`Requested quantity exceeds current stock. Available: ${availableQty}, Requested: ${requestedTotal}`);
        }
        return this.prisma.outboundOrderItem.create({
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
    }
};
exports.OutboundOrdersService = OutboundOrdersService;
exports.OutboundOrdersService = OutboundOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutboundOrdersService);
//# sourceMappingURL=outbound-orders.service.js.map