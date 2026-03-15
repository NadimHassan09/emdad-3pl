import { Module } from '@nestjs/common';
import { ReturnOrdersService } from './return-orders.service';
import { ReturnOrdersController } from './return-orders.controller';
import { PrismaService } from '../../database/prisma/prisma.service';
import { InventoryModule } from '../inventory/inventory.module';

@Module({
  imports: [InventoryModule],
  controllers: [ReturnOrdersController],
  providers: [ReturnOrdersService, PrismaService],
  exports: [ReturnOrdersService],
})
export class ReturnOrdersModule {}


