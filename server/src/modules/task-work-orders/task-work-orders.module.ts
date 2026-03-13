import { Module } from '@nestjs/common';
import { TaskWorkOrdersService } from './task-work-orders.service';
import { TaskWorkOrdersController } from './task-work-orders.controller';
import { PrismaService } from '../../database/prisma/prisma.service';

@Module({
  controllers: [TaskWorkOrdersController],
  providers: [TaskWorkOrdersService, PrismaService],
  exports: [TaskWorkOrdersService],
})
export class TaskWorkOrdersModule {}
