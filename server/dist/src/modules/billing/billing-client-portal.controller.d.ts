import { BillingService } from './billing.service';
import { ClientPortalInvoiceQueryDto } from './dto/client-portal-invoice-query.dto';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class BillingClientPortalController {
    private readonly billing;
    constructor(billing: BillingService);
    listInvoices(actor: JwtPayload, query: ClientPortalInvoiceQueryDto): Promise<{
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
    getInvoice(id: string, actor: JwtPayload): Promise<{
        lines: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            currency: string;
            description: string | null;
            referenceType: string | null;
            referenceId: string | null;
            quantity: import("@prisma/client/runtime/library").Decimal;
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
    getOverview(actor: JwtPayload): Promise<{
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
}
