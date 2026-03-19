import { Module } from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { InboundOrdersController } from './inbound-orders.controller';
import { InventoryModule } from '../inventory/inventory.module';

@Module({
  imports: [InventoryModule],
  controllers: [InboundOrdersController],
  providers: [InboundOrdersService],
  exports: [InboundOrdersService],
})
export class InboundOrdersModule {}
