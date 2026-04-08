import { IsUUID, IsOptional, IsString, IsDateString } from 'class-validator';

/** Client portal: server sets clientId from JWT. Warehouse is assigned by admin during approval. */
export class CreateInboundOrderClientPortalDto {
  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsString()
  currentStage?: string;

  @IsOptional()
  @IsDateString()
  expectedDate?: string;
}
