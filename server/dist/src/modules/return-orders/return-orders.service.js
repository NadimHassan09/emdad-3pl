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
exports.ReturnOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const return_disposition_enum_1 = require("../../common/enums/return-disposition.enum");
const inventory_service_1 = require("../inventory/inventory.service");
const movement_type_enum_1 = require("../../common/enums/movement-type.enum");
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
common_1.Injectable,
    common_1.NotFoundException,
    common_1.BadRequestException,
;
from;
'@nestjs/common';
let ReturnOrdersService = class ReturnOrdersService {
    constructor(prisma, inventoryService) {
        this.prisma = prisma;
        this.inventoryService = inventoryService;
    }
    async create(dto) {
        const outboundOrder = await this.prisma.outboundOrder.findUniqueOrThrow({
            where: { id: dto.outboundOrderId },
            include: {
                client: true,
                warehouse: true,
            },
        });
        await this.prisma.product.findUniqueOrThrow({
            where: { id: dto.productId },
        });
        if (dto.batchId) {
            await this.prisma.batch.findUniqueOrThrow({
                where: { id: dto.batchId },
            });
        }
        return this.prisma.returnOrder.create({
            data: {
                clientId: outboundOrder.clientId,
                warehouseId: outboundOrder.warehouseId,
                outboundOrderId: dto.outboundOrderId,
                returnNumber: dto.returnNumber.trim(),
                productId: dto.productId,
                batchId: dto.batchId || null,
                qty: dto.qty,
                disposition: (dto.disposition || return_disposition_enum_1.ReturnDisposition.RESTOCK),
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
    }
    async findMany(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.outboundOrderId)
            where.outboundOrderId = filter.outboundOrderId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.disposition)
            where.disposition = filter.disposition;
        return this.prisma.returnOrder.findMany({
            where,
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const returnOrder = await this.prisma.returnOrder.findUnique({
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
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
            },
        });
        if (!returnOrder) {
            throw new common_1.NotFoundException('Return order not found');
        }
        return returnOrder;
    }
    async process(id) {
        const returnOrder = await this.findOne(id);
        if (returnOrder.disposition === return_disposition_enum_1.ReturnDisposition.RESTOCK) {
            await this.inventoryService.createLedgerEntry({
                clientId: returnOrder.clientId,
                warehouseId: returnOrder.warehouseId,
                productId: returnOrder.productId,
                batchId: returnOrder.batchId || undefined,
                locationId: undefined,
                movementType: movement_type_enum_1.MovementType.RETURN,
                qtyChange: returnOrder.qty.toNumber(),
                referenceType: 'RETURN_ORDER',
                referenceId: id,
            });
        }
        return returnOrder;
    }
};
exports.ReturnOrdersService = ReturnOrdersService;
exports.ReturnOrdersService = ReturnOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        inventory_service_1.InventoryService])
], ReturnOrdersService);
//# sourceMappingURL=return-orders.service.js.map