import { IsUUID, IsDateString } from 'class-validator';

export class GenerateInvoiceDto {
  @IsUUID()
  clientId: string;

  @IsDateString()
  periodStart: string;

  @IsDateString()
  periodEnd: string;
}
