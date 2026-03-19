import { Module } from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { StockReservationsController } from './stock-reservations.controller';
import { InventoryModule } from '../inventory/inventory.module';

@Module({
  imports: [InventoryModule],
  controllers: [StockReservationsController],
  providers: [StockReservationsService],
  exports: [StockReservationsService],
})
export class StockReservationsModule {}

