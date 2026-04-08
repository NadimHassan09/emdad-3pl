import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { MovementType, Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ChargeCategory } from '../../common/enums/charge-category.enum';
import { CreateBillingPlanDto } from './dto/create-billing-plan.dto';
import { UpdateBillingPlanDto } from './dto/update-billing-plan.dto';
import { BillingPlanFilterDto } from './dto/billing-plan-filter.dto';
import { CreateClientBillingPlanDto } from './dto/create-client-billing-plan.dto';
import { UpdateClientBillingPlanDto } from './dto/update-client-billing-plan.dto';
import { ClientBillingPlanFilterDto } from './dto/client-billing-plan-filter.dto';
import { GenerateInvoiceDto } from './dto/generate-invoice.dto';
import { InvoiceFilterDto } from './dto/invoice-filter.dto';
import { BillingTransactionFilterDto } from './dto/billing-transaction-filter.dto';
import { ClientPortalInvoiceQueryDto } from './dto/client-portal-invoice-query.dto';

/** Prisma delegates for billing when PrismaClient types are not resolved. */
interface PrismaBilling {
  billingPlan: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: { where?: Record<string, unknown>; orderBy?: Record<string, string> }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string } }) => Promise<unknown>;
    update: (args: { where: { id: string }; data: Record<string, unknown> }) => Promise<unknown>;
  };
  clientBillingPlan: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: { where?: Record<string, unknown>; orderBy?: Record<string, string> }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string } }) => Promise<unknown>;
    update: (args: { where: { id: string }; data: Record<string, unknown> }) => Promise<unknown>;
  };
  invoice: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: { where?: Record<string, unknown>; orderBy?: Record<string, string> }) => Promise<unknown[]>;
    findUnique: (args: { where: { id: string }; include?: Record<string, unknown> }) => Promise<unknown>;
  };
  invoiceLine: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
  };
  billingTransaction: {
    create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (args: { where?: Record<string, unknown>; orderBy?: Record<string, string> }) => Promise<unknown[]>;
    updateMany: (args: { where: Record<string, unknown>; data: Record<string, unknown> }) => Promise<unknown>;
  };
}

/** Convert Prisma Decimal to number. */
function toNumber(value: unknown): number {
  if (typeof value === 'number' && !Number.isNaN(value)) return value;
  if (value != null && typeof value === 'object' && typeof (value as { toNumber?: () => number }).toNumber === 'function')
    return (value as { toNumber: () => number }).toNumber();
  if (value != null && typeof (value as { toString?: () => string }).toString === 'function')
    return parseFloat((value as { toString: () => string }).toString()) || 0;
  return 0;
}

/** Plan pricing for order cost calculation. */
interface PlanPricing {
  inboundItemFeeCents: number;
  inboundWeightCentsPerKg: number;
  outboundItemFeeCents: number;
  outboundWeightCentsPerKg: number;
}

/** Input for appending a billing transaction. Operational modules call this to create billable events. */
export interface CreateBillingTransactionInput {
  clientId: string;
  chargeCategory: ChargeCategory;
  amountCents: bigint | number;
  description?: string;
  currency?: string;
  referenceType?: string;
  referenceId?: string;
}

@Injectable()
export class BillingService {
  constructor(private readonly prisma: PrismaService) {}

  private db(): PrismaBilling {
    return this.prisma as unknown as PrismaBilling;
  }

  // ---------- Billing plans ----------
  async createPlan(dto: CreateBillingPlanDto) {
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

  async findManyPlans(filter?: BillingPlanFilterDto) {
    const where: Record<string, unknown> = {};
    if (filter?.isActive !== undefined) where.isActive = filter.isActive;
    return this.db().billingPlan.findMany({
      where,
      orderBy: { planName: 'asc' },
    });
  }

  async findOnePlan(id: string) {
    const plan = await this.db().billingPlan.findUnique({ where: { id } });
    if (!plan) throw new NotFoundException('Billing plan not found');
    return plan;
  }

  async updatePlan(id: string, dto: UpdateBillingPlanDto) {
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

  // ---------- Client billing plans ----------
  async createClientPlan(dto: CreateClientBillingPlanDto) {
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

  async findManyClientPlans(filter?: ClientBillingPlanFilterDto) {
    const where: Record<string, unknown> = {};
    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.billingPlanId) where.billingPlanId = filter.billingPlanId;
    return this.db().clientBillingPlan.findMany({
      where,
      orderBy: { startsAt: 'desc' },
    });
  }

  async findOneClientPlan(id: string) {
    const row = await this.db().clientBillingPlan.findUnique({ where: { id } });
    if (!row) throw new NotFoundException('Client billing plan not found');
    return row;
  }

  async updateClientPlan(id: string, dto: UpdateClientBillingPlanDto) {
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

  // ---------- Invoices ----------
  async generateInvoice(dto: GenerateInvoiceDto) {
    const periodStart = new Date(dto.periodStart);
    const periodEnd = new Date(dto.periodEnd);
    if (periodEnd < periodStart) {
      throw new BadRequestException('periodEnd must be after periodStart');
    }
    const db = this.db();
    const txList = await db.billingTransaction.findMany({
      where: {
        clientId: dto.clientId,
        invoiceId: null,
        createdAt: { gte: periodStart, lte: periodEnd },
      },
      orderBy: { createdAt: 'asc' },
    }) as Array<{ id: string; amountCents: bigint; chargeCategory: string; description: string | null; currency: string; referenceType: string | null; referenceId: string | null }>;
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
    }) as { id: string };
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

  async findManyInvoices(filter?: InvoiceFilterDto) {
    const where: Record<string, unknown> = {};
    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.status) where.status = filter.status;
    return this.db().invoice.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOneInvoice(id: string) {
    const invoice = await this.db().invoice.findUnique({
      where: { id },
      include: { lines: true },
    });
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }

  // ---------- Billing transactions (ledger) ----------
  /** Append a billing transaction. Use from operational modules to record billable events. */
  async createTransaction(input: CreateBillingTransactionInput) {
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

  async findManyTransactions(filter?: BillingTransactionFilterDto) {
    const where: Record<string, unknown> = {};
    if (filter?.clientId) where.clientId = filter.clientId;
    if (filter?.invoiceId !== undefined) where.invoiceId = filter.invoiceId;
    return this.db().billingTransaction.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  // ---------- Billing calculation (plan + orders + VAS) ----------

  /** Get client's current plan pricing for order cost calculation. Returns null if no plan. */
  private async getClientPlanPricing(clientId: string): Promise<PlanPricing | null> {
    const clientPlan = await this.prisma.clientBillingPlan.findFirst({
      where: { clientId, isCurrent: true },
      include: { billingPlan: true },
      orderBy: { startsAt: 'desc' },
    });
    const plan = clientPlan?.billingPlan as { inboundItemFeeCents?: bigint | null; inboundWeightCentsPerKg?: bigint | null; outboundItemFeeCents?: bigint | null; outboundWeightCentsPerKg?: bigint | null } | undefined;
    if (!plan) return null;
    return {
      inboundItemFeeCents: Number(plan.inboundItemFeeCents ?? 0),
      inboundWeightCentsPerKg: Number(plan.inboundWeightCentsPerKg ?? 0),
      outboundItemFeeCents: Number(plan.outboundItemFeeCents ?? 0),
      outboundWeightCentsPerKg: Number(plan.outboundWeightCentsPerKg ?? 0),
    };
  }

  /**
   * Calculate inbound receive cost: (itemFee * qty) + (weightCentsPerKg * totalWeightKg).
   * totalWeightKg = qty * productWeightKg.
   */
  calculateInboundReceiveCost(
    productWeightKg: number,
    qtyReceived: number,
    pricing: PlanPricing,
  ): number {
    const itemCost = pricing.inboundItemFeeCents * qtyReceived;
    const totalWeightKg = productWeightKg * qtyReceived;
    const weightCost = pricing.inboundWeightCentsPerKg * totalWeightKg;
    return Math.round(itemCost + weightCost);
  }

  /**
   * Calculate outbound ship cost: (itemFee * qty) + (weightCentsPerKg * totalWeightKg).
   */
  calculateOutboundShipCost(
    productWeightKg: number,
    qtyShipped: number,
    pricing: PlanPricing,
  ): number {
    const itemCost = pricing.outboundItemFeeCents * qtyShipped;
    const totalWeightKg = productWeightKg * qtyShipped;
    const weightCost = pricing.outboundWeightCentsPerKg * totalWeightKg;
    return Math.round(itemCost + weightCost);
  }

  /**
   * Record inbound receive charge. Call after successful receive.
   */
  async recordInboundReceiveCharge(
    orderId: string,
    itemId: string,
    clientId: string,
    productId: string,
    qtyReceived: number,
  ): Promise<void> {
    const pricing = await this.getClientPlanPricing(clientId);
    if (!pricing) return;

    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      select: { weight: true },
    });
    const weightKg = product ? toNumber(product.weight) : 0;

    const amountCents = this.calculateInboundReceiveCost(weightKg, qtyReceived, pricing);
    if (amountCents <= 0) return;

    await this.createTransaction({
      clientId,
      chargeCategory: ChargeCategory.MOVEMENT,
      amountCents,
      description: `Inbound receive: ${qtyReceived} units`,
      referenceType: 'INBOUND_ORDER',
      referenceId: orderId,
    });
  }

  /**
   * Record outbound ship charge. Call after successful ship.
   */
  async recordOutboundShipCharge(
    orderId: string,
    clientId: string,
    productId: string,
    qtyShipped: number,
  ): Promise<void> {
    const pricing = await this.getClientPlanPricing(clientId);
    if (!pricing) return;

    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      select: { weight: true },
    });
    const weightKg = product ? toNumber(product.weight) : 0;

    const amountCents = this.calculateOutboundShipCost(weightKg, qtyShipped, pricing);
    if (amountCents <= 0) return;

    await this.createTransaction({
      clientId,
      chargeCategory: ChargeCategory.MOVEMENT,
      amountCents,
      description: `Outbound ship: ${qtyShipped} units`,
      referenceType: 'OUTBOUND_ORDER',
      referenceId: orderId,
    });
  }

  /**
   * Record plan subscription charge. Call when generating invoice or at cycle start.
   */
  async recordPlanSubscriptionCharge(
    clientId: string,
    periodStart: Date,
    periodEnd: Date,
    description?: string,
  ): Promise<void> {
    const clientPlan = await this.prisma.clientBillingPlan.findFirst({
      where: { clientId, isCurrent: true },
      include: { billingPlan: true },
      orderBy: { startsAt: 'desc' },
    });
    const plan = clientPlan?.billingPlan as { baseFeeCents?: bigint | null } | undefined;
    const baseFeeCents = plan ? Number(plan.baseFeeCents ?? 0) : 0;
    if (baseFeeCents <= 0) return;

    await this.createTransaction({
      clientId,
      chargeCategory: ChargeCategory.PLAN_FEE,
      amountCents: baseFeeCents,
      description: description ?? `Plan subscription ${periodStart.toISOString().slice(0, 10)} - ${periodEnd.toISOString().slice(0, 10)}`,
    });
  }

  /**
   * Record VAS charge when VAS is used. Call from VAS workflow when service is performed.
   */
  async recordVasCharge(
    clientId: string,
    vasId: string,
    quantity: number,
    referenceType?: string,
    referenceId?: string,
  ): Promise<void> {
    const clientPlan = await this.prisma.clientBillingPlan.findFirst({
      where: { clientId, isCurrent: true },
      include: { billingPlan: true },
      orderBy: { startsAt: 'desc' },
    });
    const planId = clientPlan?.billingPlanId;
    if (!planId) return;

    const vasPricing = await this.prisma.vasPricing.findFirst({
      where: { vasId, billingPlanId: planId },
      include: { vas: { select: { name: true } } },
    });
    if (!vasPricing) return;

    const rateCents = Number(vasPricing.rateCents);
    const minChargeCents = vasPricing.minChargeCents ? Number(vasPricing.minChargeCents) : 0;
    let amountCents = Math.round(rateCents * quantity);
    if (minChargeCents > 0 && amountCents < minChargeCents) {
      amountCents = minChargeCents;
    }
    if (amountCents <= 0) return;

    await this.createTransaction({
      clientId,
      chargeCategory: ChargeCategory.VAS,
      amountCents,
      description: `VAS: ${(vasPricing.vas as { name: string }).name} x ${quantity}`,
      referenceType: referenceType ?? 'VAS',
      referenceId: referenceId ?? undefined,
    });
  }

  /**
   * Client portal: plan + usage summary for one tenant (current calendar month).
   */
  async getClientPortalBillingOverview(clientId: string) {
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
    const totalUnits =
      storageCap != null && storageCap > 0
        ? storageCap
        : Math.max(usedUnits, 1);
    const usedPercent =
      totalUnits > 0
        ? Math.min(100, Math.round((usedUnits / totalUnits) * 100))
        : 0;

    const [receiptCount, shipmentCount] = await Promise.all([
      this.prisma.inventoryLedger.count({
        where: {
          clientId,
          movementType: MovementType.RECEIPT,
          createdAt: { gte: startOfMonth, lte: now },
        },
      }),
      this.prisma.inventoryLedger.count({
        where: {
          clientId,
          movementType: MovementType.SHIPMENT,
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

    const sumCents = (cat: ChargeCategory) => {
      const row = txAgg.find((t) => t.chargeCategory === cat);
      const v = row?._sum?.amountCents;
      if (v == null) return 0;
      return typeof v === 'bigint' ? Number(v) : Number(v);
    };

    const storageCents = sumCents(ChargeCategory.STORAGE);
    const movementCents = sumCents(ChargeCategory.MOVEMENT);
    const vasCents = sumCents(ChargeCategory.VAS);
    const planFeeCents = sumCents(ChargeCategory.PLAN_FEE);
    const manualChargeCents = sumCents(ChargeCategory.MANUAL_CHARGE);
    const manualCreditCents = sumCents(ChargeCategory.MANUAL_CREDIT);

    const movementsTotal = receiptCount + shipmentCount;
    const inboundShare =
      movementsTotal > 0 ? receiptCount / movementsTotal : 0.5;
    const incomingCostCents = Math.round(movementCents * inboundShare);
    const outgoingCostCents = movementCents - incomingCostCents;

    const totalCents =
      storageCents +
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

  async findManyInvoicesForClientPortal(
    clientId: string,
    query?: ClientPortalInvoiceQueryDto,
  ) {
    const where: Prisma.InvoiceWhereInput = { clientId };
    if (query?.status) where.status = query.status;
    const and: Prisma.InvoiceWhereInput[] = [];
    if (query?.periodFrom) {
      and.push({ periodStart: { gte: new Date(query.periodFrom) } });
    }
    if (query?.periodTo) {
      const end = new Date(query.periodTo);
      end.setHours(23, 59, 59, 999);
      and.push({ periodEnd: { lte: end } });
    }
    if (and.length) where.AND = and;
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

  async findOneInvoiceForClientPortal(clientId: string, invoiceId: string) {
    const invoice = await this.prisma.invoice.findFirst({
      where: { id: invoiceId, clientId },
      include: {
        lines: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
    return invoice;
  }
}
