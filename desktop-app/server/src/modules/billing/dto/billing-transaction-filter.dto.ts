import { IsOptional, IsUUID } from 'class-validator';

export class BillingTransactionFilterDto {
  @IsOptional()
  @IsUUID()
  clientId?: string;

  @IsOptional()
  @IsUUID()
  invoiceId?: string;
}
