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
import { OutboundOrdersService } from './outbound-orders.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { StockReservationsService } from '../stock-reservations/stock-reservations.service';
import { CreateReservationDto } from '../stock-reservations/dto/create-reservation.dto';
import { ShipOrderDto } from '../stock-reservations/dto/ship-order.dto';

@Controller('outbound-orders')
@UseGuards(JwtAuthGuard)
export class OutboundOrdersController {
  constructor(
    private readonly outboundOrders: OutboundOrdersService,
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateOutboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.outboundOrders.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: OutboundOrderFilterDto) {
    return this.outboundOrders.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.outboundOrders.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateOutboundOrderDto,
  ) {
    return this.outboundOrders.update(id, dto);
  }

  @Post(':id/items')
  addItem(
    @Param('id', ParseUUIDPipe) orderId: string,
    @Body() dto: AddOutboundOrderItemDto,
  ) {
    return this.outboundOrders.addItem(orderId, dto);
  }

  @Post(':id/reservations')
  createReservation(
    @Param('id', ParseUUIDPipe) outboundOrderId: string,
    @Body() dto: CreateReservationDto,
  ) {
    return this.stockReservations.createReservation(outboundOrderId, dto);
  }

  @Post(':id/ship')
  shipOrder(
    @Param('id', ParseUUIDPipe) outboundOrderId: string,
    @Body() dto: ShipOrderDto,
  ) {
    return this.stockReservations.shipOrder(outboundOrderId, dto);
  }
}
