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
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { ClientAccountGuard } from '../../common/guards/client-account.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { CreateInboundOrderClientPortalDto } from './dto/create-inbound-order-client-portal.dto';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Get('client-portal')
  @UseGuards(ClientAccountGuard)
  findManyClientPortal(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.inboundOrders.findManyForClientPortal(actor.clientId!, filter);
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
    return this.inboundOrders.findOneForClientPortal(actor.clientId!, ref);
  }

  @Post('client-portal')
  @UseGuards(ClientAccountGuard)
  createClientPortal(
    @Body() dto: CreateInboundOrderClientPortalDto,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.inboundOrders.createForClientPortal(
      actor.clientId!,
      actor.actorId,
      dto,
    );
  }

  @Post('client-portal/:orderId/items')
  @UseGuards(ClientAccountGuard)
  addItemClientPortal(
    @Param('orderId', ParseUUIDPipe) orderId: string,
    @Body() dto: AddInboundOrderItemDto,
    @CurrentActor() actor: JwtPayload,
  ) {
    return this.inboundOrders.addItemForClientPortal(
      actor.clientId!,
      orderId,
      dto,
    );
  }

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: InboundOrderFilterDto) {
    return this.inboundOrders.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.inboundOrders.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateInboundOrderDto,
  ) {
    return this.inboundOrders.update(id, dto);
  }

  @Post(':id/items')
  addItem(
    @Param('id', ParseUUIDPipe) orderId: string,
    @Body() dto: AddInboundOrderItemDto,
  ) {
    return this.inboundOrders.addItem(orderId, dto);
  }

  @Post(':id/receive')
  receive(
    @Param('id', ParseUUIDPipe) orderId: string,
    @Body() dto: ReceiveInboundOrderDto,
  ) {
    return this.inboundOrders.receive(orderId, dto);
  }
}
