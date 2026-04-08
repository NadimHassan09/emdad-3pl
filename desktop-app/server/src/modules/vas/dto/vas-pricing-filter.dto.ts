import { IsOptional, IsUUID } from 'class-validator';

export class VasPricingFilterDto {
  @IsOptional()
  @IsUUID()
  vasId?: string;

  @IsOptional()
  @IsUUID()
  billingPlanId?: string;
}
