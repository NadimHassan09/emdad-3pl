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
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const charge_category_enum_1 = require("../../common/enums/charge-category.enum");
function toNumber(value) {
    if (typeof value === 'number' && !Number.isNaN(value))
        return value;
    if (value != null && typeof value === 'object' && typeof value.toNumber === 'function')
        return value.toNumber();
    if (value != null && typeof value.toString === 'function')
        return parseFloat(value.toString()) || 0;
    return 0;
}
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
                baseFeeCents: dto.baseFeeCents ? BigInt(dto.baseFeeCents) : undefined,
                inboundItemFeeCents: dto.inboundItemFeeCents ? BigInt(dto.inboundItemFeeCents) : undefined,
                inboundWeightCentsPerKg: dto.inboundWeightCentsPerKg ? BigInt(dto.inboundWeightCentsPerKg) : undefined,
                outboundItemFeeCents: dto.outboundItemFeeCents ? BigInt(dto.outboundItemFeeCents) : undefined,
                outboundWeightCentsPerKg: dto.outboundWeightCentsPerKg ? BigInt(dto.outboundWeightCentsPerKg) : undefined,
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
                ...(dto.baseFeeCents !== undefined && { baseFeeCents: BigInt(dto.baseFeeCents) }),
                ...(dto.inboundItemFeeCents !== undefined && { inboundItemFeeCents: BigInt(dto.inboundItemFeeCents) }),
                ...(dto.inboundWeightCentsPerKg !== undefined && { inboundWeightCentsPerKg: BigInt(dto.inboundWeightCentsPerKg) }),
                ...(dto.outboundItemFeeCents !== undefined && { outboundItemFeeCents: BigInt(dto.outboundItemFeeCents) }),
                ...(dto.outboundWeightCentsPerKg !== undefined && { outboundWeightCentsPerKg: BigInt(dto.outboundWeightCentsPerKg) }),
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
    async getClientPlanPricing(clientId) {
        const clientPlan = await this.prisma.clientBillingPlan.findFirst({
            where: { clientId, isCurrent: true },
            include: { billingPlan: true },
            orderBy: { startsAt: 'desc' },
        });
        const plan = clientPlan?.billingPlan;
        if (!plan)
            return null;
        return {
            inboundItemFeeCents: Number(plan.inboundItemFeeCents ?? 0),
            inboundWeightCentsPerKg: Number(plan.inboundWeightCentsPerKg ?? 0),
            outboundItemFeeCents: Number(plan.outboundItemFeeCents ?? 0),
            outboundWeightCentsPerKg: Number(plan.outboundWeightCentsPerKg ?? 0),
        };
    }
    calculateInboundReceiveCost(productWeightKg, qtyReceived, pricing) {
        const itemCost = pricing.inboundItemFeeCents * qtyReceived;
        const totalWeightKg = productWeightKg * qtyReceived;
        const weightCost = pricing.inboundWeightCentsPerKg * totalWeightKg;
        return Math.round(itemCost + weightCost);
    }
    calculateOutboundShipCost(productWeightKg, qtyShipped, pricing) {
        const itemCost = pricing.outboundItemFeeCents * qtyShipped;
        const totalWeightKg = productWeightKg * qtyShipped;
        const weightCost = pricing.outboundWeightCentsPerKg * totalWeightKg;
        return Math.round(itemCost + weightCost);
    }
    async recordInboundReceiveCharge(orderId, itemId, clientId, productId, qtyReceived) {
        const pricing = await this.getClientPlanPricing(clientId);
        if (!pricing)
            return;
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
            select: { weight: true },
        });
        const weightKg = product ? toNumber(product.weight) : 0;
        const amountCents = this.calculateInboundReceiveCost(weightKg, qtyReceived, pricing);
        if (amountCents <= 0)
            return;
        await this.createTransaction({
            clientId,
            chargeCategory: charge_category_enum_1.ChargeCategory.MOVEMENT,
            amountCents,
            description: `Inbound receive: ${qtyReceived} units`,
            referenceType: 'INBOUND_ORDER',
            referenceId: orderId,
        });
    }
    async recordOutboundShipCharge(orderId, clientId, productId, qtyShipped) {
        const pricing = await this.getClientPlanPricing(clientId);
        if (!pricing)
            return;
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
            select: { weight: true },
        });
        const weightKg = product ? toNumber(product.weight) : 0;
        const amountCents = this.calculateOutboundShipCost(weightKg, qtyShipped, pricing);
        if (amountCents <= 0)
            return;
        await this.createTransaction({
            clientId,
            chargeCategory: charge_category_enum_1.ChargeCategory.MOVEMENT,
            amountCents,
            description: `Outbound ship: ${qtyShipped} units`,
            referenceType: 'OUTBOUND_ORDER',
            referenceId: orderId,
        });
    }
    async recordPlanSubscriptionCharge(clientId, periodStart, periodEnd, description) {
        const clientPlan = await this.prisma.clientBillingPlan.findFirst({
            where: { clientId, isCurrent: true },
            include: { billingPlan: true },
            orderBy: { startsAt: 'desc' },
        });
        const plan = clientPlan?.billingPlan;
        const baseFeeCents = plan ? Number(plan.baseFeeCents ?? 0) : 0;
        if (baseFeeCents <= 0)
            return;
        await this.createTransaction({
            clientId,
            chargeCategory: charge_category_enum_1.ChargeCategory.PLAN_FEE,
            amountCents: baseFeeCents,
            description: description ?? `Plan subscription ${periodStart.toISOString().slice(0, 10)} - ${periodEnd.toISOString().slice(0, 10)}`,
        });
    }
    async recordVasCharge(clientId, vasId, quantity, referenceType, referenceId) {
        const clientPlan = await this.prisma.clientBillingPlan.findFirst({
            where: { clientId, isCurrent: true },
            include: { billingPlan: true },
            orderBy: { startsAt: 'desc' },
        });
        const planId = clientPlan?.billingPlanId;
        if (!planId)
            return;
        const vasPricing = await this.prisma.vasPricing.findFirst({
            where: { vasId, billingPlanId: planId },
            include: { vas: { select: { name: true } } },
        });
        if (!vasPricing)
            return;
        const rateCents = Number(vasPricing.rateCents);
        const minChargeCents = vasPricing.minChargeCents ? Number(vasPricing.minChargeCents) : 0;
        let amountCents = Math.round(rateCents * quantity);
        if (minChargeCents > 0 && amountCents < minChargeCents) {
            amountCents = minChargeCents;
        }
        if (amountCents <= 0)
            return;
        await this.createTransaction({
            clientId,
            chargeCategory: charge_category_enum_1.ChargeCategory.VAS,
            amountCents,
            description: `VAS: ${vasPricing.vas.name} x ${quantity}`,
            referenceType: referenceType ?? 'VAS',
            referenceId: referenceId ?? undefined,
        });
    }
    async getClientPortalBillingOverview(clientId) {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        startOfMonth.setHours(0, 0, 0, 0);
        const clientPlan = await this.prisma.clientBillingPlan.findFirst({
            where: { clientId, isCurrent: true },
            include: {
                billingPlan: {
                    select: {
                        planName: true,
                        storageIncluded: true,
                        billingCycle: true,
                        isActive: true,
                    },
                },
            },
            orderBy: { startsAt: 'desc' },
        });
        const planName = clientPlan?.billingPlan?.planName ?? '—';
        const renewalDateStr = clientPlan?.endsAt
            ? new Date(clientPlan.endsAt).toISOString().slice(0, 10)
            : '—';
        const statusAr = clientPlan ? 'نشط' : 'لا توجد خطة';
        const storageCap = clientPlan?.billingPlan?.storageIncluded
            ? Number(clientPlan.billingPlan.storageIncluded)
            : null;
        const stockAgg = await this.prisma.currentStock.aggregate({
            where: { clientId },
            _sum: { quantity: true },
        });
        const usedUnits = Number(stockAgg._sum.quantity ?? 0);
        const totalUnits = storageCap != null && storageCap > 0
            ? storageCap
            : Math.max(usedUnits, 1);
        const usedPercent = totalUnits > 0
            ? Math.min(100, Math.round((usedUnits / totalUnits) * 100))
            : 0;
        const [receiptCount, shipmentCount] = await Promise.all([
            this.prisma.inventoryLedger.count({
                where: {
                    clientId,
                    movementType: client_1.MovementType.RECEIPT,
                    createdAt: { gte: startOfMonth, lte: now },
                },
            }),
            this.prisma.inventoryLedger.count({
                where: {
                    clientId,
                    movementType: client_1.MovementType.SHIPMENT,
                    createdAt: { gte: startOfMonth, lte: now },
                },
            }),
        ]);
        const txAgg = await this.prisma.billingTransaction.groupBy({
            by: ['chargeCategory'],
            where: {
                clientId,
                createdAt: { gte: startOfMonth, lte: now },
            },
            _sum: { amountCents: true },
        });
        const sumCents = (cat) => {
            const row = txAgg.find((t) => t.chargeCategory === cat);
            const v = row?._sum?.amountCents;
            if (v == null)
                return 0;
            return typeof v === 'bigint' ? Number(v) : Number(v);
        };
        const storageCents = sumCents(charge_category_enum_1.ChargeCategory.STORAGE);
        const movementCents = sumCents(charge_category_enum_1.ChargeCategory.MOVEMENT);
        const vasCents = sumCents(charge_category_enum_1.ChargeCategory.VAS);
        const planFeeCents = sumCents(charge_category_enum_1.ChargeCategory.PLAN_FEE);
        const manualChargeCents = sumCents(charge_category_enum_1.ChargeCategory.MANUAL_CHARGE);
        const manualCreditCents = sumCents(charge_category_enum_1.ChargeCategory.MANUAL_CREDIT);
        const movementsTotal = receiptCount + shipmentCount;
        const inboundShare = movementsTotal > 0 ? receiptCount / movementsTotal : 0.5;
        const incomingCostCents = Math.round(movementCents * inboundShare);
        const outgoingCostCents = movementCents - incomingCostCents;
        const totalCents = storageCents +
            movementCents +
            vasCents +
            planFeeCents +
            manualChargeCents -
            manualCreditCents;
        return {
            currentPlan: {
                planName,
                renewalDate: renewalDateStr,
                status: statusAr,
                billingCycle: clientPlan?.billingPlan?.billingCycle ?? null,
            },
            usage: {
                space: {
                    usedPercent,
                    usedUnits,
                    totalUnits,
                    estimatedCostUsd: storageCents / 100,
                },
                incomingMovements: {
                    count: receiptCount,
                    estimatedCostUsd: incomingCostCents / 100,
                },
                outgoingOrders: {
                    count: shipmentCount,
                    estimatedCostUsd: outgoingCostCents / 100,
                },
            },
            totalEstimatedUsd: totalCents / 100,
            currency: 'USD',
            periodStart: startOfMonth.toISOString().slice(0, 10),
            periodEnd: now.toISOString().slice(0, 10),
        };
    }
    async findManyInvoicesForClientPortal(clientId, query) {
        const where = { clientId };
        if (query?.status)
            where.status = query.status;
        const and = [];
        if (query?.periodFrom) {
            and.push({ periodStart: { gte: new Date(query.periodFrom) } });
        }
        if (query?.periodTo) {
            const end = new Date(query.periodTo);
            end.setHours(23, 59, 59, 999);
            and.push({ periodEnd: { lte: end } });
        }
        if (and.length)
            where.AND = and;
        return this.prisma.invoice.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                invoiceNumber: true,
                periodStart: true,
                periodEnd: true,
                status: true,
                subtotalCents: true,
                taxAmountCents: true,
                discountAmountCents: true,
                totalAmountCents: true,
                currency: true,
                issuedAt: true,
                paidAt: true,
                dueDate: true,
                notes: true,
                createdAt: true,
            },
        });
    }
    async findOneInvoiceForClientPortal(clientId, invoiceId) {
        const invoice = await this.prisma.invoice.findFirst({
            where: { id: invoiceId, clientId },
            include: {
                lines: {
                    orderBy: { createdAt: 'asc' },
                },
            },
        });
        if (!invoice) {
            throw new common_1.NotFoundException('Invoice not found');
        }
        return invoice;
    }
};
exports.BillingService = BillingService;
exports.BillingService = BillingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BillingService);
//# sourceMappingURL=billing.service.js.map