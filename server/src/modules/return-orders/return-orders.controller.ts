import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ReturnOrdersService } from './return-orders.service';
import { CreateReturnOrderDto } from './dto/create-return-order.dto';
import { ReturnOrderFilterDto } from './dto/return-order-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('return-orders')
@UseGuards(JwtAuthGuard)
export class ReturnOrdersController {
  constructor(private readonly returnOrders: ReturnOrdersService) {}

  @Post()
  create(@Body() dto: CreateReturnOrderDto) {
    return this.returnOrders.create(dto);
  }

  @Get()
  findMany(@Query() filter: ReturnOrderFilterDto) {
    return this.returnOrders.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.returnOrders.findOne(id);
  }

  @Post(':id/process')
  process(@Param('id', ParseUUIDPipe) id: string) {
    return this.returnOrders.process(id);
  }
}

