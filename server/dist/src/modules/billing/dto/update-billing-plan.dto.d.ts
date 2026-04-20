import { BillingCycleEnum } from '../../../common/enums/billing-cycle.enum';
export declare class UpdateBillingPlanDto {
    planName?: string;
    storageIncluded?: number;
    billingCycle?: BillingCycleEnum;
    baseFeeCents?: number;
    inboundItemFeeCents?: number;
    inboundWeightCentsPerKg?: number;
    outboundItemFeeCents?: number;
    outboundWeightCentsPerKg?: number;
    isActive?: boolean;
}
