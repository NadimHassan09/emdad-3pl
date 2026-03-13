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
import { OutboundOrdersModule } from './modules/outbound-orders/outbound-orders.module';
import { TaskWorkOrdersModule } from './modules/task-work-orders/task-work-orders.module';
import { ApprovalsModule } from './modules/approvals/approvals.module';
import { AuditModule } from './modules/audit/audit.module';

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
    OutboundOrdersModule,
    TaskWorkOrdersModule,
    ApprovalsModule,
    AuditModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
