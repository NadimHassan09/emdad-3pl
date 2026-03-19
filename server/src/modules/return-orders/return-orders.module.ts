import { Module } from '@nestjs/common';
import { ReturnOrdersService } from './return-orders.service';
import { ReturnOrdersController } from './return-orders.controller';
import { InventoryModule } from '../inventory/inventory.module';

@Module({
  imports: [InventoryModule],
  controllers: [ReturnOrdersController],
  providers: [ReturnOrdersService],
  exports: [ReturnOrdersService],
})
export class ReturnOrdersModule {}

