import { Module } from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { AdjustmentsController } from './adjustments.controller';
import { InventoryModule } from '../inventory/inventory.module';
import { ApprovalsModule } from '../approvals/approvals.module';

@Module({
  imports: [InventoryModule, ApprovalsModule],
  controllers: [AdjustmentsController],
  providers: [AdjustmentsService],
  exports: [AdjustmentsService],
})
export class AdjustmentsModule {}

