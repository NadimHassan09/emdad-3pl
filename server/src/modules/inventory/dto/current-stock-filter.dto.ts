import { IsOptional, IsUUID } from 'class-validator';

/**
 * Filter DTO for querying current stock.
 * Supports filtering by client, warehouse, product, batch, and location.
 */
export class CurrentStockFilterDto {
  @IsOptional()
  @IsUUID()
  clientId?: string;

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
}

