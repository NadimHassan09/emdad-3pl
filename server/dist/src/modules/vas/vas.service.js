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
exports.VasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let VasService = class VasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    db() {
        return this.prisma;
    }
    async createVas(dto) {
        return this.db().vas.create({
            data: {
                code: dto.code.trim(),
                name: dto.name.trim(),
                description: dto.description?.trim(),
                isActive: dto.isActive ?? true,
            },
        });
    }
    async findManyVas(filter) {
        const where = {};
        if (filter?.isActive !== undefined)
            where.isActive = filter.isActive;
        return this.db().vas.findMany({
            where,
            orderBy: { code: 'asc' },
        });
    }
    async findOneVas(id) {
        const vas = await this.db().vas.findUnique({ where: { id } });
        if (!vas)
            throw new common_1.NotFoundException('VAS not found');
        return vas;
    }
    async updateVas(id, dto) {
        await this.findOneVas(id);
        return this.db().vas.update({
            where: { id },
            data: {
                ...(dto.code !== undefined && { code: dto.code.trim() }),
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.description !== undefined && { description: dto.description?.trim() }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
            },
        });
    }
    async createVasPricing(dto) {
        return this.db().vasPricing.create({
            data: {
                vasId: dto.vasId,
                billingPlanId: dto.billingPlanId,
                pricingMethod: dto.pricingMethod,
                rateCents: BigInt(dto.rateCents),
                baseUomId: dto.baseUomId,
                minChargeCents: dto.minChargeCents != null ? BigInt(dto.minChargeCents) : undefined,
                billingUnit: dto.billingUnit,
                ruleJson: dto.ruleJson ?? {},
            },
        });
    }
    async findManyVasPricing(filter) {
        const where = {};
        if (filter?.vasId)
            where.vasId = filter.vasId;
        if (filter?.billingPlanId)
            where.billingPlanId = filter.billingPlanId;
        return this.db().vasPricing.findMany({
            where,
            orderBy: { vasId: 'asc' },
            include: { vas: true, billingPlan: true, baseUom: { select: { id: true, code: true, name: true } } },
        });
    }
    async findOneVasPricing(id) {
        const row = await this.db().vasPricing.findUnique({
            where: { id },
            include: { vas: true, billingPlan: true, baseUom: true },
        });
        if (!row)
            throw new common_1.NotFoundException('VAS pricing not found');
        return row;
    }
    async updateVasPricing(id, dto) {
        await this.findOneVasPricing(id);
        return this.db().vasPricing.update({
            where: { id },
            data: {
                ...(dto.pricingMethod !== undefined && { pricingMethod: dto.pricingMethod }),
                ...(dto.rateCents !== undefined && { rateCents: BigInt(dto.rateCents) }),
                ...(dto.baseUomId !== undefined && { baseUomId: dto.baseUomId }),
                ...(dto.minChargeCents !== undefined && { minChargeCents: BigInt(dto.minChargeCents) }),
                ...(dto.billingUnit !== undefined && { billingUnit: dto.billingUnit }),
                ...(dto.ruleJson !== undefined && { ruleJson: dto.ruleJson }),
            },
        });
    }
};
exports.VasService = VasService;
exports.VasService = VasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VasService);
//# sourceMappingURL=vas.service.js.map