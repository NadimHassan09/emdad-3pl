"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundOrdersModule = void 0;
const common_1 = require("@nestjs/common");
const outbound_orders_service_1 = require("./outbound-orders.service");
const outbound_orders_controller_1 = require("./outbound-orders.controller");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let OutboundOrdersModule = class OutboundOrdersModule {
};
exports.OutboundOrdersModule = OutboundOrdersModule;
exports.OutboundOrdersModule = OutboundOrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [outbound_orders_controller_1.OutboundOrdersController],
        providers: [outbound_orders_service_1.OutboundOrdersService, prisma_service_1.PrismaService],
        exports: [outbound_orders_service_1.OutboundOrdersService],
    })
], OutboundOrdersModule);
//# sourceMappingURL=outbound-orders.module.js.map