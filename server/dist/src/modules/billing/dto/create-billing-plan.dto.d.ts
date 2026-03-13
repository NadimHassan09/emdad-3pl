import { BillingCycleEnum } from '../../../common/enums/billing-cycle.enum';
export declare class CreateBillingPlanDto {
    planName: string;
    storageIncluded?: number;
    billingCycle: BillingCycleEnum;
    isActive?: boolean;
}
