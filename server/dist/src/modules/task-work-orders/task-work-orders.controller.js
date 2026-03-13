"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWorkOrdersController = void 0;
const common_1 = require("@nestjs/common");
const task_work_orders_service_1 = require("./task-work-orders.service");
const create_task_work_order_dto_1 = require("./dto/create-task-work-order.dto");
const update_task_work_order_dto_1 = require("./dto/update-task-work-order.dto");
const task_work_order_filter_dto_1 = require("./dto/task-work-order-filter.dto");
const assign_task_work_order_dto_1 = require("./dto/assign-task-work-order.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let TaskWorkOrdersController = class TaskWorkOrdersController {
    constructor(taskWorkOrders) {
        this.taskWorkOrders = taskWorkOrders;
    }
    create(dto) {
        return this.taskWorkOrders.create(dto);
    }
    findMany(filter) {
        return this.taskWorkOrders.findMany(filter);
    }
    findOne(id) {
        return this.taskWorkOrders.findOne(id);
    }
    update(id, dto) {
        return this.taskWorkOrders.update(id, dto);
    }
    assign(id, dto) {
        return this.taskWorkOrders.assign(id, dto);
    }
    complete(id) {
        return this.taskWorkOrders.complete(id);
    }
};
exports.TaskWorkOrdersController = TaskWorkOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_work_order_dto_1.CreateTaskWorkOrderDto]),
    __metadata("design:returntype", void 0)
], TaskWorkOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_work_order_filter_dto_1.TaskWorkOrderFilterDto]),
    __metadata("design:returntype", void 0)
], TaskWorkOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskWorkOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_work_order_dto_1.UpdateTaskWorkOrderDto]),
    __metadata("design:returntype", void 0)
], TaskWorkOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/assign'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assign_task_work_order_dto_1.AssignTaskWorkOrderDto]),
    __metadata("design:returntype", void 0)
], TaskWorkOrdersController.prototype, "assign", null);
__decorate([
    (0, common_1.Post)(':id/complete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskWorkOrdersController.prototype, "complete", null);
exports.TaskWorkOrdersController = TaskWorkOrdersController = __decorate([
    (0, common_1.Controller)('task-work-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [task_work_orders_service_1.TaskWorkOrdersService])
], TaskWorkOrdersController);
//# sourceMappingURL=task-work-orders.controller.js.map