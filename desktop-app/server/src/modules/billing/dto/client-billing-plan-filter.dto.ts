import { IsOptional, IsUUID } from 'class-validator';

export class ClientBillingPlanFilterDto {
  @IsOptional()
  @IsUUID()
  clientId?: string;

  @IsOptional()
  @IsUUID()
  billingPlanId?: string;
}
