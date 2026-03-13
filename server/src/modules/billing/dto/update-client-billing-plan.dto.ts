import { IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class UpdateClientBillingPlanDto {
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
