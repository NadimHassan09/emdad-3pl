import { IsOptional, IsString, IsDateString, IsEnum } from 'class-validator';
import { OrderStatus } from './inbound-order-filter.dto';

export class UpdateInboundOrderDto {
  @IsOptional()
  @IsString()
  orderNumber?: string;

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @IsOptional()
  @IsString()
  currentStage?: string;

  @IsOptional()
  @IsDateString()
  expectedDate?: string;
}

