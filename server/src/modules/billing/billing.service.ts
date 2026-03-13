import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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
}
