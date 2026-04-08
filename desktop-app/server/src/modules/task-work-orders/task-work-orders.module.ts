import { Module } from '@nestjs/common';
import { TaskWorkOrdersService } from './task-work-orders.service';
import { TaskWorkOrdersController } from './task-work-orders.controller';

@Module({
  controllers: [TaskWorkOrdersController],
  providers: [TaskWorkOrdersService],
  exports: [TaskWorkOrdersService],
})
export class TaskWorkOrdersModule {}
