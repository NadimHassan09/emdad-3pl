import { Module } from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { InboundOrdersController } from './inbound-orders.controller';
import { InventoryModule } from '../inventory/inventory.module';
import { BillingModule } from '../billing/billing.module';
import { ApprovalsModule } from '../approvals/approvals.module';

@Module({
  imports: [InventoryModule, BillingModule, ApprovalsModule],
  controllers: [InboundOrdersController],
  providers: [InboundOrdersService],
  exports: [InboundOrdersService],
})
export class InboundOrdersModule {}
