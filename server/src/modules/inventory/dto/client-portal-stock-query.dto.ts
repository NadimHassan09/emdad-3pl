import { IsOptional, IsUUID, IsDateString } from 'class-validator';

/**
 * Query params for client-portal current stock (clientId always from JWT, never from query).
 */
export class ClientPortalStockQueryDto {
  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsUUID()
  productId?: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsOptional()
  @IsUUID()
  locationId?: string;

  /** Filter rows where updated_at >= start of this day (UTC) */
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  /** Filter rows where updated_at <= end of this day (UTC) */
  @IsOptional()
  @IsDateString()
  dateTo?: string;
}
