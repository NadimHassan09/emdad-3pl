import { IsUUID, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateClientBillingPlanDto {
  @IsUUID()
  clientId: string;

  @IsUUID()
  billingPlanId: string;

  @IsOptional()
  @IsDateString()
  startsAt?: string;

  @IsOptional()
  @IsDateString()
  endsAt?: string;

  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;
}
