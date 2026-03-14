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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let LocationsService = class LocationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(warehouseId, dto) {
        await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: warehouseId },
        });
        if (dto.parentLocationId) {
            const parent = await this.prisma.location.findFirst({
                where: { id: dto.parentLocationId, warehouseId },
            });
            if (!parent)
                throw new common_1.NotFoundException('Parent location not found in this warehouse');
        }
        return this.prisma.location.create({
            data: {
                warehouseId,
                code: dto.code.trim(),
                locationType: dto.locationType,
                parentLocationId: dto.parentLocationId ?? undefined,
                capacityValue: dto.capacityValue,
                capacityUomId: dto.capacityUomId ?? undefined,
                isActive: dto.isActive ?? true,
            },
        });
    }
    async findManyByWarehouse(warehouseId) {
        await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: warehouseId },
        });
        return this.prisma.location.findMany({
            where: { warehouseId },
            include: {
                parentLocation: { select: { id: true, code: true } },
                capacityUom: { select: { id: true, code: true, name: true } },
            },
            orderBy: [{ code: 'asc' }],
        });
    }
    async findOne(id) {
        const location = await this.prisma.location.findUnique({
            where: { id },
            include: { warehouse: true, parentLocation: true, capacityUom: true },
        });
        if (!location)
            throw new common_1.NotFoundException('Location not found');
        return location;
    }
    async update(id, dto) {
        const location = await this.findOne(id);
        if (dto.parentLocationId !== undefined && dto.parentLocationId !== null) {
            const parent = await this.prisma.location.findFirst({
                where: { id: dto.parentLocationId, warehouseId: location.warehouseId },
            });
            if (!parent)
                throw new common_1.NotFoundException('Parent location not found in this warehouse');
        }
        return this.prisma.location.update({
            where: { id },
            data: {
                ...(dto.code !== undefined && { code: dto.code.trim() }),
                ...(dto.locationType !== undefined && {
                    locationType: dto.locationType,
                }),
                ...(dto.parentLocationId !== undefined && {
                    parentLocationId: dto.parentLocationId,
                }),
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
    async findTree() {
        const list = await this.prisma.location.findMany({
            where: { isActive: true },
            orderBy: { code: 'asc' },
        });
        const byId = new Map();
        list.forEach((loc) => byId.set(loc.id, {
            id: loc.id,
            code: loc.code,
            locationType: loc.locationType,
            parentLocationId: loc.parentLocationId,
            warehouseId: loc.warehouseId,
            children: [],
        }));
        const roots = [];
        byId.forEach((node) => {
            if (node.parentLocationId) {
                const parent = byId.get(node.parentLocationId);
                if (parent)
                    parent.children.push(node);
                else
                    roots.push(node);
            }
            else
                roots.push(node);
        });
        return roots;
    }
};
exports.LocationsService = LocationsService;
exports.LocationsService = LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LocationsService);
//# sourceMappingURL=locations.service.js.map