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
exports.UomService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let UomService = class UomService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.uom.create({
            data: {
                code: dto.code.trim(),
                name: dto.name.trim(),
                dimension: dto.dimension,
                baseConversion: dto.baseConversion ?? 1,
                isActive: dto.isActive ?? true,
            },
        });
    }
    async findMany(filter) {
        try {
            const where = {};
            if (filter?.isActive !== undefined)
                where.isActive = filter.isActive;
            if (filter?.dimension !== undefined)
                where.dimension = filter.dimension;
            return await this.prisma.uom.findMany({
                where,
                orderBy: { code: 'asc' },
            });
        }
        catch (e) {
            console.error('[UomService] findMany failed:', e);
            return [];
        }
    }
    async findOne(id) {
        const uom = await this.prisma.uom.findUnique({ where: { id } });
        if (!uom)
            throw new common_1.NotFoundException('UOM not found');
        return uom;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.uom.update({
            where: { id },
            data: {
                ...(dto.code !== undefined && { code: dto.code.trim() }),
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.dimension !== undefined && {
                    dimension: dto.dimension,
                }),
                ...(dto.baseConversion !== undefined && {
                    baseConversion: dto.baseConversion,
                }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
            },
        });
    }
};
exports.UomService = UomService;
exports.UomService = UomService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UomService);
//# sourceMappingURL=uom.service.js.map