import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OutboundOrdersService } from './outbound-orders.service';
import { CreateOutboundOrderDto } from './dto/create-outbound-order.dto';
import { UpdateOutboundOrderDto } from './dto/update-outbound-order.dto';
import { OutboundOrderFilterDto } from './dto/outbound-order-filter.dto';
import { AddOutboundOrderItemDto } from './dto/add-outbound-order-item.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ClientAccountGuard } from '../../common/guards/client-account.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { CreateOutboundOrderClientPortalDto } from './dto/create-outbound-order-client-portal.dto';
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

  @Get('client-portal')
  @UseGuards(ClientAccountGuard)
  findManyClientPortal(
    @Query() filter: OutboundOrderFilterDto,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.outboundOrders.findManyForClientPortal(actor.clientId!, filter);
  }

  @Get('client-portal/detail')
  @UseGuards(ClientAccountGuard)
  findOneClientPortal(
    @Query('ref') ref: string,
    @CurrentActor() actor: JwtPayload,
  ) {
    if (!ref?.trim()) {
      throw new BadRequestException('Query parameter ref is required');
    }
    return this.outboundOrders.findOneForClientPortal(actor.clientId!, ref);
  }

  @Post('client-portal')
  @UseGuards(ClientAccountGuard)
  createClientPortal(
    @Body() dto: CreateOutboundOrderClientPortalDto,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.outboundOrders.createForClientPortal(
      actor.clientId!,
      actor.actorId,
      dto,
    );
  }

  @Post('client-portal/:orderId/items')
  @UseGuards(ClientAccountGuard)
  addItemClientPortal(
    @Param('orderId', ParseUUIDPipe) orderId: string,
    @Body() dto: AddOutboundOrderItemDto,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.outboundOrders.addItemForClientPortal(
      actor.clientId!,
      orderId,
      dto,
    );
  }

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

  /**
   * POST /outbound-orders/:id/ship-all
   *
   * Ship ALL picked quantities for the outbound order.
   * This is used when packing is completed and we want to deduct stock
   * for everything that has already been picked.
   */
  @Post(':id/ship-all')
  shipAll(
    @Param('id', ParseUUIDPipe) outboundOrderId: string,
  ) {
    return this.stockReservations.autoShipFullOrder(outboundOrderId);
  }
}
