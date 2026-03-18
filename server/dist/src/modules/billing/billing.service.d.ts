import { Prisma } from '@prisma/client';
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
export interface CreateBillingTransactionInput {
    clientId: string;
    chargeCategory: ChargeCategory;
    amountCents: bigint | number;
    description?: string;
    currency?: string;
    referenceType?: string;
    referenceId?: string;
}
export declare class BillingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private db;
    createPlan(dto: CreateBillingPlanDto): Promise<unknown>;
    findManyPlans(filter?: BillingPlanFilterDto): Promise<unknown[]>;
    findOnePlan(id: string): Promise<{}>;
    updatePlan(id: string, dto: UpdateBillingPlanDto): Promise<unknown>;
    createClientPlan(dto: CreateClientBillingPlanDto): Promise<unknown>;
    findManyClientPlans(filter?: ClientBillingPlanFilterDto): Promise<unknown[]>;
    findOneClientPlan(id: string): Promise<{}>;
    updateClientPlan(id: string, dto: UpdateClientBillingPlanDto): Promise<unknown>;
    generateInvoice(dto: GenerateInvoiceDto): Promise<{}>;
    findManyInvoices(filter?: InvoiceFilterDto): Promise<unknown[]>;
    findOneInvoice(id: string): Promise<{}>;
    createTransaction(input: CreateBillingTransactionInput): Promise<unknown>;
    findManyTransactions(filter?: BillingTransactionFilterDto): Promise<unknown[]>;
    getClientPortalBillingOverview(clientId: string): Promise<{
        currentPlan: {
            planName: string;
            renewalDate: string;
            status: string;
            billingCycle: import(".prisma/client").$Enums.BillingCycleEnum | null;
        };
        usage: {
            space: {
                usedPercent: number;
                usedUnits: number;
                totalUnits: number;
                estimatedCostUsd: number;
            };
            incomingMovements: {
                count: number;
                estimatedCostUsd: number;
            };
            outgoingOrders: {
                count: number;
                estimatedCostUsd: number;
            };
        };
        totalEstimatedUsd: number;
        currency: string;
        periodStart: string;
        periodEnd: string;
    }>;
    findManyInvoicesForClientPortal(clientId: string, query?: ClientPortalInvoiceQueryDto): Promise<{
        id: string;
        createdAt: Date;
        currency: string;
        status: import(".prisma/client").$Enums.InvoiceStatus;
        periodStart: Date;
        periodEnd: Date;
        invoiceNumber: string;
        subtotalCents: bigint;
        taxAmountCents: bigint;
        discountAmountCents: bigint;
        totalAmountCents: bigint;
        dueDate: Date | null;
        issuedAt: Date | null;
        paidAt: Date | null;
        notes: string | null;
    }[]>;
    findOneInvoiceForClientPortal(clientId: string, invoiceId: string): Promise<{
        lines: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            currency: string;
            description: string | null;
            referenceType: string | null;
            referenceId: string | null;
            quantity: Prisma.Decimal;
            invoiceId: string;
            totalAmountCents: bigint;
            chargeCategory: import(".prisma/client").$Enums.ChargeCategory;
            unitPriceCents: bigint;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        currency: string;
        status: import(".prisma/client").$Enums.InvoiceStatus;
        clientId: string;
        periodStart: Date;
        periodEnd: Date;
        invoiceNumber: string;
        subtotalCents: bigint;
        taxAmountCents: bigint;
        discountAmountCents: bigint;
        totalAmountCents: bigint;
        dueDate: Date | null;
        issuedAt: Date | null;
        paidAt: Date | null;
        notes: string | null;
    }>;
}
