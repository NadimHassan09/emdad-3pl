import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { TaskWorkOrdersService } from './task-work-orders.service';
import { CreateTaskWorkOrderDto } from './dto/create-task-work-order.dto';
import { UpdateTaskWorkOrderDto } from './dto/update-task-work-order.dto';
import { TaskWorkOrderFilterDto } from './dto/task-work-order-filter.dto';
import { AssignTaskWorkOrderDto } from './dto/assign-task-work-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('task-work-orders')
@UseGuards(JwtAuthGuard)
export class TaskWorkOrdersController {
  constructor(private readonly taskWorkOrders: TaskWorkOrdersService) {}

  @Post()
  create(@Body() dto: CreateTaskWorkOrderDto) {
    return this.taskWorkOrders.create(dto);
  }

  @Get()
  findMany(@Query() filter: TaskWorkOrderFilterDto) {
    return this.taskWorkOrders.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.taskWorkOrders.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTaskWorkOrderDto,
  ) {
    return this.taskWorkOrders.update(id, dto);
  }

  @Post(':id/assign')
  assign(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: AssignTaskWorkOrderDto,
  ) {
    return this.taskWorkOrders.assign(id, dto);
  }

  @Post(':id/complete')
  complete(@Param('id', ParseUUIDPipe) id: string) {
    return this.taskWorkOrders.complete(id);
  }
}

