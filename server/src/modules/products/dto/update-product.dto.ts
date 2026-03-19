import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MinLength, MaxLength } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  sku?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  category?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  brand?: string;

  @IsOptional()
  @IsUUID()
  defaultUomId?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minThreshold?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
