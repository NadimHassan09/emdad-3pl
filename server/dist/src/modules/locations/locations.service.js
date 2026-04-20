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
const TYPE_ABBREV = {
    ZONE: 'ZN',
    AISLE: 'AS',
    RACK: 'RK',
    BIN: 'BN',
    STAGING: 'ST',
};
let LocationsService = class LocationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateCode(warehouseId, warehouseCode, locationType) {
        const prefix = `${warehouseCode.replace(/[^A-Za-z0-9]/g, '').slice(0, 6)}-${TYPE_ABBREV[locationType] ?? locationType.slice(0, 2).toUpperCase()}`;
        const maxAttempts = 10;
        for (let i = 0; i < maxAttempts; i++) {
            const suffix = Math.random().toString(36).slice(2, 7).toUpperCase();
            const candidate = `${prefix}-${suffix}`;
            const existing = await this.prisma.location.findFirst({
                where: { warehouseId, code: candidate },
                select: { id: true },
            });
            if (!existing)
                return candidate;
        }
        return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
    }
    async create(warehouseId, dto) {
        const warehouse = await this.prisma.warehouse.findUniqueOrThrow({
            where: { id: warehouseId },
            select: { id: true, code: true },
        });
        if (dto.parentLocationId) {
            const parent = await this.prisma.location.findFirst({
                where: { id: dto.parentLocationId, warehouseId },
            });
            if (!parent)
                throw new common_1.NotFoundException('Parent location not found in this warehouse');
        }
        const code = dto.code?.trim() ||
            (await this.generateCode(warehouseId, warehouse.code, dto.locationType));
        return this.prisma.location.create({
            data: {
                warehouseId,
                code,
                locationType: dto.locationType,
                parentLocationId: dto.parentLocationId ?? undefined,
                capacityValue: dto.capacityValue,
                capacityUomId: dto.capacityUomId ?? undefined,
                isActive: dto.isActive ?? true,
            },
            include: {
                warehouse: { select: { id: true, code: true, name: true } },
                parentLocation: { select: { id: true, code: true } },
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
    async findFlat(warehouseId) {
        const where = warehouseId ? { warehouseId } : {};
        const rows = await this.prisma.location.findMany({
            where,
            include: {
                warehouse: { select: { id: true, code: true, name: true } },
                parentLocation: { select: { id: true, code: true } },
            },
            orderBy: [{ warehouseId: 'asc' }, { code: 'asc' }],
        });
        return rows.map((r) => ({
            id: r.id,
            code: r.code,
            barcode: r.code,
            locationType: r.locationType,
            parentLocationId: r.parentLocationId,
            parentCode: r.parentLocation?.code ?? null,
            warehouseId: r.warehouseId,
            warehouseName: r.warehouse.name,
            warehouseCode: r.warehouse.code,
            isActive: r.isActive,
            capacityValue: r.capacityValue ? Number(r.capacityValue) : null,
            createdAt: r.createdAt,
        }));
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
    async update(id, warehouseId, dto) {
        const location = await this.findOne(id);
        if (location.warehouseId !== warehouseId) {
            throw new common_1.NotFoundException('Location not found in this warehouse');
        }
        if (dto.parentLocationId !== undefined && dto.parentLocationId !== null) {
            if (dto.parentLocationId === id) {
                throw new common_1.ConflictException('A location cannot be its own parent');
            }
            const parent = await this.prisma.location.findFirst({
                where: { id: dto.parentLocationId, warehouseId },
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
                    parentLocationId: dto.parentLocationId ?? null,
                }),
                ...(dto.capacityValue !== undefined && {
                    capacityValue: dto.capacityValue,
                }),
                ...(dto.capacityUomId !== undefined && {
                    capacityUomId: dto.capacityUomId,
                }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
            },
            include: {
                warehouse: { select: { id: true, code: true, name: true } },
                parentLocation: { select: { id: true, code: true } },
            },
        });
    }
    async remove(id, warehouseId) {
        const location = await this.findOne(id);
        if (location.warehouseId !== warehouseId) {
            throw new common_1.NotFoundException('Location not found in this warehouse');
        }
        const hasChildren = await this.prisma.location.findFirst({
            where: { parentLocationId: id },
            select: { id: true },
        });
        if (hasChildren) {
            throw new common_1.ConflictException('Cannot delete a location that has child locations. Remove children first.');
        }
        const hasStock = await this.prisma.currentStock.findFirst({
            where: { locationId: id, quantity: { gt: 0 } },
            select: { id: true },
        });
        if (hasStock) {
            throw new common_1.ConflictException('Cannot delete a location that has stock. Move or adjust stock first.');
        }
        await this.prisma.location.delete({ where: { id } });
        return { success: true };
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