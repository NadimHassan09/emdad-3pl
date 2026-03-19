import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UomService } from './uom.service';
import { CreateUomDto } from './dto/create-uom.dto';
import { UpdateUomDto } from './dto/update-uom.dto';
import { UomFilterDto } from './dto/uom-filter.dto';

@Controller('uom')
export class UomController {
  constructor(private readonly uom: UomService) {}

  @Post()
  create(@Body() dto: CreateUomDto) {
    return this.uom.create(dto);
  }

  @Get()
  findMany(@Query() filter: UomFilterDto) {
    return this.uom.findMany(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.uom.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateUomDto) {
    return this.uom.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.uom.remove(id);
  }
}
