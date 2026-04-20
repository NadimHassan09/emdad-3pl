"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundOrdersModule = void 0;
const common_1 = require("@nestjs/common");
const inbound_orders_service_1 = require("./inbound-orders.service");
const inbound_orders_controller_1 = require("./inbound-orders.controller");
const inventory_module_1 = require("../inventory/inventory.module");
const billing_module_1 = require("../billing/billing.module");
const approvals_module_1 = require("../approvals/approvals.module");
let InboundOrdersModule = class InboundOrdersModule {
};
exports.InboundOrdersModule = InboundOrdersModule;
exports.InboundOrdersModule = InboundOrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [inventory_module_1.InventoryModule, billing_module_1.BillingModule, approvals_module_1.ApprovalsModule],
        controllers: [inbound_orders_controller_1.InboundOrdersController],
        providers: [inbound_orders_service_1.InboundOrdersService],
        exports: [inbound_orders_service_1.InboundOrdersService],
    })
], InboundOrdersModule);
//# sourceMappingURL=inbound-orders.module.js.map