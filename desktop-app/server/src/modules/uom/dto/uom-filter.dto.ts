import { IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { UomDimension } from '../../../common/enums/uom-dimension.enum';

export class UomFilterDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === true || value === 'true')
  isActive?: boolean;

  @IsOptional()
  @IsEnum(UomDimension)
  dimension?: UomDimension;
}
