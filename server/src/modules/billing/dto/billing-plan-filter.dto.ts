import { IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class BillingPlanFilterDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === true || value === 'true')
  isActive?: boolean;
}
