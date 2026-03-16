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
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}





















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}





















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}





















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}





















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}
















  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}











  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}









  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}



  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AdjustmentsService } from './adjustments.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { AdjustmentFilterDto } from './dto/adjustment-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentActor } from '../../common/decorators/current-actor.decorator';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('adjustments')
@UseGuards(JwtAuthGuard)
export class AdjustmentsController {
  constructor(private readonly adjustments: AdjustmentsService) {}

  @Post()
  create(
    @Body() dto: CreateAdjustmentDto,
    @CurrentActor() payload: JwtPayload,
  ) {
    return this.adjustments.create(dto, payload.actorId);
  }

  @Get()
  findMany(@Query() filter: AdjustmentFilterDto) {
    return this.adjustments.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.findOne(id);
  }

  @Post(':id/apply')
  apply(@Param('id', ParseUUIDPipe) id: string) {
    return this.adjustments.apply(id);
  }
}























