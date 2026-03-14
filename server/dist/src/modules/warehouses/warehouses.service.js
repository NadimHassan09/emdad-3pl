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
exports.WarehousesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let WarehousesService = class WarehousesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.warehouse.create({
            data: {
                code: dto.code.trim(),
                name: dto.name.trim(),
                capacityValue: dto.capacityValue,
                capacityUomId: dto.capacityUomId ?? undefined,
                isActive: dto.isActive ?? true,
            },
        });
    }
    async findMany(filter) {
        try {
            const where = {};
            if (filter?.isActive !== undefined)
                where.isActive = filter.isActive;
            return await this.prisma.warehouse.findMany({
                where,
                select: {
                    id: true,
                    code: true,
                    name: true,
                    isActive: true,
                    capacityValue: true,
                    capacityUomId: true,
                },
                orderBy: { code: 'asc' },
            });
        }
        catch (e) {
            console.error('[WarehousesService] findMany failed:', e);
            return [];
        }
    }
    async findOne(id) {
        const warehouse = await this.prisma.warehouse.findUnique({
            where: { id },
            include: { capacityUom: true },
        });
        if (!warehouse)
            throw new common_1.NotFoundException('Warehouse not found');
        return warehouse;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.warehouse.update({
            where: { id },
            data: {
                ...(dto.code !== undefined && { code: dto.code.trim() }),
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.capacityValue !== undefined && {
                    capacityValue: dto.capacityValue,
                }),
                ...(dto.capacityUomId !== undefined && {
                    capacityUomId: dto.capacityUomId,
                }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
            },
        });
    }
};
exports.WarehousesService = WarehousesService;
exports.WarehousesService = WarehousesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WarehousesService);
//# sourceMappingURL=warehouses.service.js.map