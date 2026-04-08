import {
  IsString,
  IsOptional,
  IsEnum,
  IsUUID,
  IsNumber,
  IsObject,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PricingMethod } from '../../../common/enums/pricing-method.enum';

export class CreateVasPricingDto {
  @IsUUID()
  vasId: string;

  @IsUUID()
  billingPlanId: string;

  @IsEnum(PricingMethod)
  pricingMethod: PricingMethod;

  @IsNumber()
  @Type(() => Number)
  rateCents: number;

  @IsOptional()
  @IsUUID()
  baseUomId?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minChargeCents?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  billingUnit?: string;

  @IsOptional()
  @IsObject()
  ruleJson?: Record<string, unknown>;
}
