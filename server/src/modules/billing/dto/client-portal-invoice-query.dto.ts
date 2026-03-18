import { IsOptional, IsEnum, IsDateString } from 'class-validator';
import { InvoiceStatus } from '../../../common/enums/invoice-status.enum';

export class ClientPortalInvoiceQueryDto {
  @IsOptional()
  @IsEnum(InvoiceStatus)
  status?: InvoiceStatus;

  @IsOptional()
  @IsDateString()
  periodFrom?: string;

  @IsOptional()
  @IsDateString()
  periodTo?: string;
}
