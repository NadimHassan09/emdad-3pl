import { Module } from '@nestjs/common';
import { OutboundOrdersService } from './outbound-orders.service';
import { OutboundOrdersController } from './outbound-orders.controller';
import { StockReservationsModule } from '../stock-reservations/stock-reservations.module';
import { ApprovalsModule } from '../approvals/approvals.module';

@Module({
  imports: [StockReservationsModule, ApprovalsModule],
  controllers: [OutboundOrdersController],
  providers: [OutboundOrdersService],
  exports: [OutboundOrdersService],
})
export class OutboundOrdersModule {}
