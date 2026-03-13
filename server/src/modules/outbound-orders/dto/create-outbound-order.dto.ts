import { IsUUID, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateOutboundOrderDto {
  @IsUUID()
  @IsNotEmpty()
  clientId: string;

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
  expectedShipDate?: string;
}

