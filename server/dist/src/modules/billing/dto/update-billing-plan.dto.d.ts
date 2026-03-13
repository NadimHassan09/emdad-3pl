import { BillingCycleEnum } from '../../../common/enums/billing-cycle.enum';
export declare class UpdateBillingPlanDto {
    planName?: string;
    storageIncluded?: number;
    billingCycle?: BillingCycleEnum;
    isActive?: boolean;
}
