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
exports.BillingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let BillingService = class BillingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    db() {
        return this.prisma;
    }
    async createPlan(dto) {
        return this.db().billingPlan.create({
            data: {
                planName: dto.planName.trim(),
                storageIncluded: dto.storageIncluded,
                billingCycle: dto.billingCycle,
                isActive: dto.isActive ?? true,
            },
        });
    }
    async findManyPlans(filter) {
        const where = {};
        if (filter?.isActive !== undefined)
            where.isActive = filter.isActive;
        return this.db().billingPlan.findMany({
            where,
            orderBy: { planName: 'asc' },
        });
    }
    async findOnePlan(id) {
        const plan = await this.db().billingPlan.findUnique({ where: { id } });
        if (!plan)
            throw new common_1.NotFoundException('Billing plan not found');
        return plan;
    }
    async updatePlan(id, dto) {
        await this.findOnePlan(id);
        return this.db().billingPlan.update({
            where: { id },
            data: {
                ...(dto.planName !== undefined && { planName: dto.planName.trim() }),
                ...(dto.storageIncluded !== undefined && { storageIncluded: dto.storageIncluded }),
                ...(dto.billingCycle !== undefined && { billingCycle: dto.billingCycle }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
            },
        });
    }
    async createClientPlan(dto) {
        return this.db().clientBillingPlan.create({
            data: {
                clientId: dto.clientId,
                billingPlanId: dto.billingPlanId,
                startsAt: dto.startsAt ? new Date(dto.startsAt) : undefined,
                endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
                isCurrent: dto.isCurrent ?? true,
            },
        });
    }
    async findManyClientPlans(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.billingPlanId)
            where.billingPlanId = filter.billingPlanId;
        return this.db().clientBillingPlan.findMany({
            where,
            orderBy: { startsAt: 'desc' },
        });
    }
    async findOneClientPlan(id) {
        const row = await this.db().clientBillingPlan.findUnique({ where: { id } });
        if (!row)
            throw new common_1.NotFoundException('Client billing plan not found');
        return row;
    }
    async updateClientPlan(id, dto) {
        await this.findOneClientPlan(id);
        return this.db().clientBillingPlan.update({
            where: { id },
            data: {
                ...(dto.startsAt !== undefined && { startsAt: new Date(dto.startsAt) }),
                ...(dto.endsAt !== undefined && { endsAt: new Date(dto.endsAt) }),
                ...(dto.isCurrent !== undefined && { isCurrent: dto.isCurrent }),
            },
        });
    }
    async generateInvoice(dto) {
        const periodStart = new Date(dto.periodStart);
        const periodEnd = new Date(dto.periodEnd);
        if (periodEnd < periodStart) {
            throw new common_1.BadRequestException('periodEnd must be after periodStart');
        }
        const db = this.db();
        const txList = await db.billingTransaction.findMany({
            where: {
                clientId: dto.clientId,
                invoiceId: null,
                createdAt: { gte: periodStart, lte: periodEnd },
            },
            orderBy: { createdAt: 'asc' },
        });
        const totalCents = txList.reduce((sum, t) => sum + Number(t.amountCents), 0);
        const invoiceNumber = `INV-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const invoice = await db.invoice.create({
            data: {
                clientId: dto.clientId,
                invoiceNumber,
                periodStart,
                periodEnd,
                subtotalCents: totalCents,
                taxAmountCents: 0,
                discountAmountCents: 0,
                totalAmountCents: totalCents,
                currency: 'USD',
                status: 'DRAFT',
            },
        });
        for (const t of txList) {
            await db.invoiceLine.create({
                data: {
                    invoiceId: invoice.id,
                    chargeCategory: t.chargeCategory,
                    description: t.description,
                    quantity: 1,
                    unitPriceCents: t.amountCents,
                    totalAmountCents: t.amountCents,
                    currency: t.currency ?? 'USD',
                    referenceType: t.referenceType ?? null,
                    referenceId: t.referenceId ?? null,
                },
            });
        }
        await db.billingTransaction.updateMany({
            where: { id: { in: txList.map((x) => x.id) } },
            data: { invoiceId: invoice.id },
        });
        return this.findOneInvoice(invoice.id);
    }
    async findManyInvoices(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.status)
            where.status = filter.status;
        return this.db().invoice.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOneInvoice(id) {
        const invoice = await this.db().invoice.findUnique({
            where: { id },
            include: { lines: true },
        });
        if (!invoice)
            throw new common_1.NotFoundException('Invoice not found');
        return invoice;
    }
    async createTransaction(input) {
        return this.db().billingTransaction.create({
            data: {
                clientId: input.clientId,
                chargeCategory: input.chargeCategory,
                amountCents: typeof input.amountCents === 'bigint' ? input.amountCents : BigInt(input.amountCents),
                description: input.description,
                currency: input.currency ?? 'USD',
                referenceType: input.referenceType,
                referenceId: input.referenceId,
            },
        });
    }
    async findManyTransactions(filter) {
        const where = {};
        if (filter?.clientId)
            where.clientId = filter.clientId;
        if (filter?.invoiceId !== undefined)
            where.invoiceId = filter.invoiceId;
        return this.db().billingTransaction.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BillingService);
//# sourceMappingURL=billing.service.js.map