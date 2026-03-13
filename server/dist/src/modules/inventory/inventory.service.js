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
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let InventoryService = class InventoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findCurrentStock(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.locationId !== undefined) {
            where.locationId = filter.locationId || null;
        }
        return this.prisma.currentStock.findMany({
            where,
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
            },
            orderBy: [
                { clientId: 'asc' },
                { warehouseId: 'asc' },
                { productId: 'asc' },
            ],
        });
    }
    async findCurrentStockByProduct(productId, filter) {
        return this.findCurrentStock({
            ...filter,
            productId,
        });
    }
    async findLedger(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.warehouseId)
            where.warehouseId = filter.warehouseId;
        if (filter?.productId)
            where.productId = filter.productId;
        if (filter?.batchId !== undefined) {
            where.batchId = filter.batchId || null;
        }
        if (filter?.locationId !== undefined) {
            where.locationId = filter.locationId || null;
        }
        if (filter?.movementType) {
            where.movementType = filter.movementType;
        }
        if (filter?.referenceType) {
            where.referenceType = filter.referenceType;
        }
        if (filter?.referenceId) {
            where.referenceId = filter.referenceId;
        }
        if (filter?.dateFrom || filter?.dateTo) {
            where.createdAt = {};
            if (filter.dateFrom) {
                where.createdAt.gte = new Date(filter.dateFrom);
            }
            if (filter.dateTo) {
                where.createdAt.lte = new Date(filter.dateTo);
            }
        }
        return this.prisma.inventoryLedger.findMany({
            where,
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async createLedgerEntry(dto) {
        const currentStock = await this.prisma.currentStock.findFirst({
            where: {
                clientId: dto.clientId,
                warehouseId: dto.warehouseId,
                productId: dto.productId,
                batchId: dto.batchId || null,
                locationId: dto.locationId || null,
            },
        });
        const qtyBefore = currentStock?.quantity
            ? typeof currentStock.quantity === 'number'
                ? currentStock.quantity
                : currentStock.quantity.toNumber()
            : 0;
        const qtyAfter = qtyBefore + dto.qtyChange;
        if (qtyAfter < 0) {
            throw new common_1.BadRequestException(`Insufficient stock. Current: ${qtyBefore}, Requested change: ${dto.qtyChange}, Result: ${qtyAfter}`);
        }
        return this.prisma.inventoryLedger.create({
            data: {
                clientId: dto.clientId,
                warehouseId: dto.warehouseId,
                productId: dto.productId,
                batchId: dto.batchId || null,
                locationId: dto.locationId || null,
                movementType: dto.movementType,
                qtyChange: dto.qtyChange,
                qtyBefore: qtyBefore,
                qtyAfter: qtyAfter,
                referenceType: dto.referenceType || null,
                referenceId: dto.referenceId || null,
            },
            include: {
                client: { select: { id: true, code: true, name: true } },
                warehouse: { select: { id: true, code: true, name: true } },
                product: { select: { id: true, sku: true, name: true } },
                batch: { select: { id: true, batchCode: true } },
                location: { select: { id: true, code: true } },
            },
        });
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryService);
//# sourceMappingURL=inventory.service.js.map