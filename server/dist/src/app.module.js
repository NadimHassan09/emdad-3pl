"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./modules/auth/auth.module");
const clients_module_1 = require("./modules/clients/clients.module");
const warehouses_module_1 = require("./modules/warehouses/warehouses.module");
const locations_module_1 = require("./modules/locations/locations.module");
const uom_module_1 = require("./modules/uom/uom.module");
const products_module_1 = require("./modules/products/products.module");
const batches_module_1 = require("./modules/batches/batches.module");
const inventory_module_1 = require("./modules/inventory/inventory.module");
const inbound_orders_module_1 = require("./modules/inbound-orders/inbound-orders.module");
const outbound_orders_module_1 = require("./modules/outbound-orders/outbound-orders.module");
const task_work_orders_module_1 = require("./modules/task-work-orders/task-work-orders.module");
const stock_reservations_module_1 = require("./modules/stock-reservations/stock-reservations.module");
const adjustments_module_1 = require("./modules/adjustments/adjustments.module");
const return_orders_module_1 = require("./modules/return-orders/return-orders.module");
const approvals_module_1 = require("./modules/approvals/approvals.module");
const audit_module_1 = require("./modules/audit/audit.module");
const billing_module_1 = require("./modules/billing/billing.module");
const vas_module_1 = require("./modules/vas/vas.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env.local', '.env'],
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            clients_module_1.ClientsModule,
            warehouses_module_1.WarehousesModule,
            locations_module_1.LocationsModule,
            uom_module_1.UomModule,
            products_module_1.ProductsModule,
            batches_module_1.BatchesModule,
            inventory_module_1.InventoryModule,
            inbound_orders_module_1.InboundOrdersModule,
            outbound_orders_module_1.OutboundOrdersModule,
            task_work_orders_module_1.TaskWorkOrdersModule,
            stock_reservations_module_1.StockReservationsModule,
            adjustments_module_1.AdjustmentsModule,
            return_orders_module_1.ReturnOrdersModule,
            approvals_module_1.ApprovalsModule,
            audit_module_1.AuditModule,
            billing_module_1.BillingModule,
            vas_module_1.VasModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map