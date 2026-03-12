import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MinLength, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsUUID()
  clientId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  sku: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name: string;

  @IsUUID()
  defaultUomId: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minThreshold?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
