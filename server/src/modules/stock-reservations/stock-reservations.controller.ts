import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.release(id);
  }

  @Post('outbound-allocations/:id/pick')
  pickAllocation(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: PickAllocationDto,
  ) {
    return this.stockReservations.pickAllocation(id, dto);
  }
}


  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { StockReservationsService } from './stock-reservations.service';
import { PickAllocationDto } from './dto/pick-allocation.dto';
import { ShipOrderDto } from './dto/ship-order.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('stock-reservations')
@UseGuards(JwtAuthGuard)
export class StockReservationsController {
  constructor(
    private readonly stockReservations: StockReservationsService,
  ) {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.findOne(id);
  }

  @Post(':id/confirm')
  confirm(@Param('id', ParseUUIDPipe) id: string) {
    return this.stockReservations.confirm(id);
  }

  @Post(':id/release')
  release(@Param('id', ParseUUIDPipe) id: string) {
    