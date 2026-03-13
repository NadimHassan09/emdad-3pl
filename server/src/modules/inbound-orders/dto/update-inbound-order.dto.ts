import { IsOptional, IsString, IsDateString, IsEnum } from 'class-validator';
import { OrderStatus } from '../../../common/enums/order-status.enum';

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
