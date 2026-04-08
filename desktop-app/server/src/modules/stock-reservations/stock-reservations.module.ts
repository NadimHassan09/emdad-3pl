import { Module } from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { StockReservationsController } from './stock-reservations.controller';
import { InventoryModule } from '../inventory/inventory.module';
import { BillingModule } from '../billing/billing.module';

@Module({
  imports: [InventoryModule, BillingModule],
  controllers: [StockReservationsController],
  providers: [StockReservationsService],
  exports: [StockReservationsService],
})
export class StockReservationsModule {}

