import { IsOptional, IsUUID, IsString, IsEnum, IsDateString } from 'class-validator';
import { OrderStatus } from '../../../common/enums/order-status.enum';

export class OutboundOrderFilterDto {
  @IsOptional()
  @IsUUID()
  clientId?: string;

  @IsOptional()
  @IsUUID()
  warehouseId?: string;

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @IsOptional()
  @IsString()
  orderNumber?: string;

  @IsOptional()
  @IsDateString()
  expectedShipDateFrom?: string;

  @IsOptional()
  @IsDateString()
  expectedShipDateTo?: string;
}
