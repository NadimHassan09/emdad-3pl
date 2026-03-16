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
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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

  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { InboundOrdersService } from './inbound-orders.service';
import { CreateInboundOrderDto } from './dto/create-inbound-order.dto';
import { UpdateInboundOrderDto } from './dto/update-inbound-order.dto';
import { InboundOrderFilterDto } from './dto/inbound-order-filter.dto';
import { AddInboundOrderItemDto } from './dto/add-inbound-order-item.dto';
import { ReceiveInboundOrderDto } from './dto/receive-inbound-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('inbound-orders')
@UseGuards(JwtAuthGuard)
export class InboundOrdersController {
  constructor(private readonly inboundOrders: InboundOrdersService) {}

  @Post()
  create(
    @Body() dto: CreateInboundOrderDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.create(dto, payload);
  }

  @Get()
  findMany(
    @Query() filter: InboundOrderFilterDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findMany(filter, payload);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.inboundOrders.findOne(id, payload);
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
