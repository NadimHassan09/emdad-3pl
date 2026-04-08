import { IsString, IsOptional, IsBoolean, IsEnum, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { BillingCycleEnum } from '../../../common/enums/billing-cycle.enum';
import { MinLength, MaxLength } from 'class-validator';

export class UpdateBillingPlanDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  planName?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  storageIncluded?: number;

  @IsOptional()
  @IsEnum(BillingCycleEnum)
  billingCycle?: BillingCycleEnum;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  baseFeeCents?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  inboundItemFeeCents?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  inboundWeightCentsPerKg?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  outboundItemFeeCents?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  outboundWeightCentsPerKg?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
