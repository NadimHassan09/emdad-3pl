import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MinLength, MaxLength } from 'class-validator';
import { UomDimension } from '../../../common/enums/uom-dimension.enum';

export class UpdateUomDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  code?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsEnum(UomDimension)
  dimension?: UomDimension;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  baseConversion?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
