import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locations: LocationsService) {}

  @Get('tree')
  findTree() {
    return this.locations.findTree();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.locations.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateLocationDto,
  ) {
    return this.locations.update(id, dto);
  }
}

@Controller('warehouses/:warehouseId/locations')
export class WarehouseLocationsController {
  constructor(private readonly locations: LocationsService) {}

  @Post()
  create(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Body() dto: CreateLocationDto,
  ) {
    return this.locations.create(warehouseId, dto);
  }

  @Get()
  findMany(@Param('warehouseId', ParseUUIDPipe) warehouseId: string) {
    return this.locations.findManyByWarehouse(warehouseId);
  }
}
