import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingPlansController } from './billing-plans.controller';
import { ClientBillingPlansController } from './client-billing-plans.controller';
import { InvoicesController } from './invoices.controller';
import { BillingTransactionsController } from './billing-transactions.controller';

@Module({
  controllers: [
    BillingPlansController,
    ClientBillingPlansController,
    InvoicesController,
    BillingTransactionsController,
  ],
  providers: [BillingService],
  exports: [BillingService],
})
export class BillingModule {}
