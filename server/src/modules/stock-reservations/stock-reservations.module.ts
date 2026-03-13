import { Module } from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { StockReservationsController } from './stock-reservations.controller';
import { PrismaService } from '../../database/prisma/prisma.service';

@Module({
  controllers: [StockReservationsController],
  providers: [StockReservationsService, PrismaService],
  exports: [StockReservationsService],
})
export class StockReservationsModule {}

