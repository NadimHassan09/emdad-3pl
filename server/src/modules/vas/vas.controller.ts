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
import { VasService } from './vas.service';
import { CreateVasDto } from './dto/create-vas.dto';
import { UpdateVasDto } from './dto/update-vas.dto';
import { VasFilterDto } from './dto/vas-filter.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('vas')
@UseGuards(JwtAuthGuard)
export class VasController {
  constructor(private readonly vas: VasService) {}

  @Post()
  create(@Body() dto: CreateVasDto) {
    return this.vas.createVas(dto);
  }

  @Get()
  findMany(@Query() filter: VasFilterDto) {
    return this.vas.findManyVas(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.vas.findOneVas(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateVasDto) {
    return this.vas.updateVas(id, dto);
  }
}
