import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MinLength, MaxLength } from 'class-validator';

export class UpdateWarehouseDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  code?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  capacityValue?: number;

  @IsOptional()
  @IsUUID()
  capacityUomId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
