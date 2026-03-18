import { IsUUID, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';

/** Client portal: server sets clientId from JWT. */
export class CreateInboundOrderClientPortalDto {
  @IsUUID()
  @IsNotEmpty()
  warehouseId: string;

  @IsOptional()
  @IsString()
  orderNumber?: string;

  @IsOptional()
  @IsString()
  currentStage?: string;

  @IsOptional()
  @IsDateString()
  expectedDate?: string;
}
