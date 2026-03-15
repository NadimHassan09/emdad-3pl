import { IsString, IsOptional, IsDateString, IsUUID } from 'class-validator';

export class GenerateReportDto {
  @IsString()
  reportType: string;

  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsString()
  sku?: string;

  @IsOptional()
  @IsString()
  location?: string;
}

