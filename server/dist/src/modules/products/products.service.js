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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        await this.prisma.client.findUniqueOrThrow({ where: { id: dto.clientId } });
        await this.prisma.uom.findUniqueOrThrow({
            where: { id: dto.defaultUomId },
        });
        return this.prisma.product.create({
            data: {
                clientId: dto.clientId,
                sku: dto.sku.trim(),
                name: dto.name.trim(),
                defaultUomId: dto.defaultUomId,
                minThreshold: dto.minThreshold ?? 0,
                isActive: dto.isActive ?? true,
            },
            include: { defaultUom: { select: { id: true, code: true, name: true } } },
        });
    }
    async findMany(filter) {
        try {
            const where = {};
            if (filter?.clientId)
                where.clientId = filter.clientId;
            if (filter?.isActive !== undefined)
                where.isActive = filter.isActive;
            return await this.prisma.product.findMany({
                where,
                include: {
                    client: { select: { id: true, name: true } },
                    defaultUom: { select: { id: true, code: true, name: true } },
                },
                orderBy: { sku: 'asc' },
            });
        }
        catch (e) {
            console.error('[ProductsService] findMany failed:', e);
            return [];
        }
    }
    findManyForClientPortal(clientId) {
        return this.findMany({ clientId, isActive: true });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: { client: true, defaultUom: true },
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.defaultUomId)
            await this.prisma.uom.findUniqueOrThrow({
                where: { id: dto.defaultUomId },
            });
        return this.prisma.product.update({
            where: { id },
            data: {
                ...(dto.sku !== undefined && { sku: dto.sku.trim() }),
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.defaultUomId !== undefined && {
                    defaultUomId: dto.defaultUomId,
                }),
                ...(dto.minThreshold !== undefined && {
                    minThreshold: dto.minThreshold,
                }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
            },
        });
    }
    generateUniqueSku(clientCode, clientId) {
        const safeCode = clientCode.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 20) || 'CL';
        const random = Math.random().toString(36).slice(2, 10);
        return `${safeCode}-${random}`;
    }
    async createForClientPortal(clientId, dto) {
        const client = await this.prisma.client.findUniqueOrThrow({
            where: { id: clientId },
            select: { code: true },
        });
        await this.prisma.uom.findUniqueOrThrow({
            where: { id: dto.defaultUomId },
        });
        let sku;
        let attempts = 0;
        const maxAttempts = 5;
        do {
            sku = this.generateUniqueSku(client.code, clientId);
            const existing = await this.prisma.product.findFirst({
                where: { clientId, sku },
            });
            if (!existing)
                break;
            attempts++;
        } while (attempts < maxAttempts);
        if (attempts >= maxAttempts) {
            sku = `${client.code}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        }
        return this.prisma.product.create({
            data: {
                clientId,
                sku,
                name: dto.name.trim(),
                description: dto.description?.trim() ?? null,
                category: dto.category?.trim() || null,
                brand: dto.brand?.trim() || null,
                price: dto.price != null ? dto.price : null,
                declaredValue: dto.declaredValue != null ? dto.declaredValue : null,
                defaultUomId: dto.defaultUomId,
                weight: dto.weight ?? 0,
                lengthCm: dto.length ?? 0,
                widthCm: dto.width ?? 0,
                heightCm: dto.height ?? 0,
                unitsPerCarton: dto.unitsPerCarton ?? 1,
                barcode: dto.barcode?.trim() || null,
                isSerialized: dto.isSerialized ?? false,
                isBatchTracked: dto.isBatchTracked ?? false,
                requiresExpiryDate: dto.requiresExpiryDate ?? false,
                minThreshold: dto.minThreshold ?? 0,
                reorderPoint: dto.reorderPoint ?? null,
                isActive: true,
            },
            include: { defaultUom: { select: { id: true, code: true, name: true } } },
        });
    }
    async updateForClientPortal(id, clientId, dto) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        if (product.clientId !== clientId) {
            throw new common_1.ForbiddenException('You do not have access to this product');
        }
        if (dto.defaultUomId) {
            await this.prisma.uom.findUniqueOrThrow({
                where: { id: dto.defaultUomId },
            });
        }
        return this.prisma.product.update({
            where: { id },
            data: {
                ...(dto.sku !== undefined && { sku: dto.sku.trim() }),
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.description !== undefined && {
                    description: dto.description?.trim() ?? null,
                }),
                ...(dto.category !== undefined && {
                    category: dto.category?.trim() || null,
                }),
                ...(dto.brand !== undefined && { brand: dto.brand?.trim() || null }),
                ...(dto.price !== undefined && { price: dto.price }),
                ...(dto.declaredValue !== undefined && {
                    declaredValue: dto.declaredValue,
                }),
                ...(dto.defaultUomId !== undefined && {
                    defaultUomId: dto.defaultUomId,
                }),
                ...(dto.weight !== undefined && { weight: dto.weight }),
                ...(dto.length !== undefined && { lengthCm: dto.length }),
                ...(dto.width !== undefined && { widthCm: dto.width }),
                ...(dto.height !== undefined && { heightCm: dto.height }),
                ...(dto.unitsPerCarton !== undefined && {
                    unitsPerCarton: dto.unitsPerCarton,
                }),
                ...(dto.barcode !== undefined && {
                    barcode: dto.barcode?.trim() || null,
                }),
                ...(dto.isSerialized !== undefined && {
                    isSerialized: dto.isSerialized,
                }),
                ...(dto.isBatchTracked !== undefined && {
                    isBatchTracked: dto.isBatchTracked,
                }),
                ...(dto.requiresExpiryDate !== undefined && {
                    requiresExpiryDate: dto.requiresExpiryDate,
                }),
                ...(dto.minThreshold !== undefined && { minThreshold: dto.minThreshold }),
                ...(dto.reorderPoint !== undefined && {
                    reorderPoint: dto.reorderPoint,
                }),
            },
            include: { defaultUom: { select: { id: true, code: true, name: true } } },
        });
    }
    async deleteForClientPortal(id, clientId) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        if (product.clientId !== clientId) {
            throw new common_1.ForbiddenException('You do not have access to this product');
        }
        await this.prisma.product.delete({ where: { id } });
        return { success: true };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map