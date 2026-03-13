import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { LocationsModule } from './modules/locations/locations.module';
import { UomModule } from './modules/uom/uom.module';
import { ProductsModule } from './modules/products/products.module';
import { BatchesModule } from './modules/batches/batches.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { InboundOrdersModule } from './modules/inbound-orders/inbound-orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    DatabaseModule,
    AuthModule,
    ClientsModule,
    WarehousesModule,
    LocationsModule,
    UomModule,
    ProductsModule,
    BatchesModule,
    InventoryModule,
    InboundOrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
