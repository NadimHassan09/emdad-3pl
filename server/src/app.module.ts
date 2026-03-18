import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { ActorsModule } from './modules/actors/actors.module';
import { ClientsModule } from './modules/clients/clients.module';
import { UsersModule } from './modules/users/users.module';
import { WarehousesModule } from './modules/warehouses/warehouses.module';
import { LocationsModule } from './modules/locations/locations.module';
import { UomModule } from './modules/uom/uom.module';
import { ProductsModule } from './modules/products/products.module';
import { BatchesModule } from './modules/batches/batches.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { InboundOrdersModule } from './modules/inbound-orders/inbound-orders.module';
import { OutboundOrdersModule } from './modules/outbound-orders/outbound-orders.module';
import { TaskWorkOrdersModule } from './modules/task-work-orders/task-work-orders.module';
import { StockReservationsModule } from './modules/stock-reservations/stock-reservations.module';
import { AdjustmentsModule } from './modules/adjustments/adjustments.module';
import { ReturnOrdersModule } from './modules/return-orders/return-orders.module';
import { ApprovalsModule } from './modules/approvals/approvals.module';
import { AuditModule } from './modules/audit/audit.module';
import { BillingModule } from './modules/billing/billing.module';
import { VasModule } from './modules/vas/vas.module';
import { ClientSettingsModule } from './modules/client-settings/client-settings.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ClientPortalTeamModule } from './modules/client-portal-team/client-portal-team.module';
import { ClientPortalNotificationsModule } from './modules/client-portal-notifications/client-portal-notifications.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    DatabaseModule,
    AuthModule,
    ActorsModule,
    ClientsModule,
    UsersModule,
    WarehousesModule,
    LocationsModule,
    UomModule,
    ProductsModule,
    BatchesModule,
    InventoryModule,
    InboundOrdersModule,
    OutboundOrdersModule,
    TaskWorkOrdersModule,
    StockReservationsModule,
    AdjustmentsModule,
    ReturnOrdersModule,
    ApprovalsModule,
    AuditModule,
    BillingModule,
    VasModule,
    ClientSettingsModule,
    DashboardModule,
    ClientPortalTeamModule,
    ClientPortalNotificationsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
