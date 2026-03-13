"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWorkOrdersModule = void 0;
const common_1 = require("@nestjs/common");
const task_work_orders_service_1 = require("./task-work-orders.service");
const task_work_orders_controller_1 = require("./task-work-orders.controller");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let TaskWorkOrdersModule = class TaskWorkOrdersModule {
};
exports.TaskWorkOrdersModule = TaskWorkOrdersModule;
exports.TaskWorkOrdersModule = TaskWorkOrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [task_work_orders_controller_1.TaskWorkOrdersController],
        providers: [task_work_orders_service_1.TaskWorkOrdersService, prisma_service_1.PrismaService],
        exports: [task_work_orders_service_1.TaskWorkOrdersService],
    })
], TaskWorkOrdersModule);
//# sourceMappingURL=task-work-orders.module.js.map