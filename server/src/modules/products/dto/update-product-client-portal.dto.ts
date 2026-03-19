import {
  IsString,
  IsOptional,
  IsNumber,
  IsUUID,
  IsBoolean,
  MinLength,
  MaxLength,
  Min,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductClientPortalDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  sku?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  category?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  brand?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  weight?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  length?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  width?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  height?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  unitsPerCarton?: number;

  @IsOptional()
  @IsUUID()
  defaultUomId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @Matches(/^[\x20-\x7E]*$/, { message: 'تنسيق الباركود غير صالح' })
  barcode?: string;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isSerialized?: boolean;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isBatchTracked?: boolean;

  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  requiresExpiryDate?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  minThreshold?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  reorderPoint?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  declaredValue?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  price?: number;
}
