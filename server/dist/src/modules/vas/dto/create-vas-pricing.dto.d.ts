import { PricingMethod } from '../../../common/enums/pricing-method.enum';
export declare class CreateVasPricingDto {
    vasId: string;
    billingPlanId: string;
    pricingMethod: PricingMethod;
    rateCents: number;
    baseUomId?: string;
    minChargeCents?: number;
    billingUnit?: string;
    ruleJson?: Record<string, unknown>;
}
