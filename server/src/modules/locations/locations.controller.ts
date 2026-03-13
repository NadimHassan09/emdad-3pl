import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locations: LocationsService) {}

  @Get('tree')
  findTree() {
    return this.locations.findTree();
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
