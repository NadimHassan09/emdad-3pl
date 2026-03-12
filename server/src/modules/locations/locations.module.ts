import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { WarehouseLocationsController } from './locations.controller';
import { LocationsService } from './locations.service';

@Module({
  controllers: [LocationsController, WarehouseLocationsController],
  providers: [LocationsService],
  exports: [LocationsService],
})
export class LocationsModule {}
