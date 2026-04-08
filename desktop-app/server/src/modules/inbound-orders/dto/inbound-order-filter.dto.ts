import { IsOptional, IsUUID, IsString, IsEnum, IsDateString } from 'class-validator';
import { OrderStatus } from '../../../common/enums/order-status.enum';

export class InboundOrderFilterDto {
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
  expectedDateFrom?: string;

  @IsOptional()
  @IsDateString()
  expectedDateTo?: string;
}
