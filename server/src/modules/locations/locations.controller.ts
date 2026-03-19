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

  /** Flat list of all locations; optionally filtered by warehouseId query param. */
  @Get('flat')
  findFlat(@Query('warehouseId') warehouseId?: string) {
    return this.locations.findFlat(warehouseId);
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

  @Patch(':id')
  update(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateLocationDto,
  ) {
    return this.locations.update(id, warehouseId, dto);
  }

  @Delete(':id')
  remove(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.locations.remove(id, warehouseId);
  }
}
