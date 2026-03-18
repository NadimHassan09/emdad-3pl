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
    async createForClientPortal(clientId, dto) {
        await this.prisma.client.findUniqueOrThrow({ where: { id: clientId } });
        await this.prisma.uom.findUniqueOrThrow({
            where: { id: dto.defaultUomId },
        });
        return this.prisma.product.create({
            data: {
                clientId,
                sku: dto.sku.trim(),
                name: dto.name.trim(),
                description: dto.description?.trim() ?? null,
                price: dto.price != null ? dto.price : null,
                defaultUomId: dto.defaultUomId,
                minThreshold: 0,
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
                ...(dto.price !== undefined && { price: dto.price }),
                ...(dto.defaultUomId !== undefined && {
                    defaultUomId: dto.defaultUomId,
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