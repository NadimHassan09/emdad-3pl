import { IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class WarehouseFilterDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === true || value === 'true')
  isActive?: boolean;
}
