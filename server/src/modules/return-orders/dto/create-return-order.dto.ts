import {
  IsUUID,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ReturnDisposition } from '../../../common/enums/return-disposition.enum';

export class CreateReturnOrderDto {
  @IsUUID()
  @IsNotEmpty()
  outboundOrderId: string;

  @IsString()
  @IsNotEmpty()
  returnNumber: string;

  @IsUUID()
  @IsNotEmpty()
  productId: string;

  @IsOptional()
  @IsUUID()
  batchId?: string;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  qty: number;

  @IsOptional()
  @IsEnum(ReturnDisposition)
  disposition?: ReturnDisposition;
}

