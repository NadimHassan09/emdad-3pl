import { IsOptional, IsUUID, IsEnum } from 'class-validator';
import { InvoiceStatus } from '../../../common/enums/invoice-status.enum';

export class InvoiceFilterDto {
  @IsOptional()
  @IsUUID()
  clientId?: string;

  @IsOptional()
  @IsEnum(InvoiceStatus)
  status?: InvoiceStatus;
}
