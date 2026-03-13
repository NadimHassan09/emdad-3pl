import { PricingMethod } from '../../../common/enums/pricing-method.enum';
export declare class UpdateVasPricingDto {
    pricingMethod?: PricingMethod;
    rateCents?: number;
    baseUomId?: string;
    minChargeCents?: number;
    billingUnit?: string;
    ruleJson?: Record<string, unknown>;
}
