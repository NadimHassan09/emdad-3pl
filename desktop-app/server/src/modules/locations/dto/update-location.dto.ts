import {
  IsString,
  IsOptional,
  IsBoolean,
  IsUUID,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MinLength, MaxLength } from 'class-validator';
import { LocationType } from '../../../common/enums/location-type.enum';

export class UpdateLocationDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  code?: string;

  @IsOptional()
  @IsEnum(LocationType)
  locationType?: LocationType;

  @IsOptional()
  @IsUUID()
  parentLocationId?: string;

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
