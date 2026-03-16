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
exports.AdjustmentsController = void 0;
const common_1 = require("@nestjs/common");
const adjustments_service_1 = require("./adjustments.service");
const create_adjustment_dto_1 = require("./dto/create-adjustment.dto");
const adjustment_filter_dto_1 = require("./dto/adjustment-filter.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
let AdjustmentsController = class AdjustmentsController {
    constructor(adjustments) {
        this.adjustments = adjustments;
    }
    create(dto, payload) {
        return this.adjustments.create(dto, payload.actorId);
    }
    findMany(filter) {
        return this.adjustments.findMany(filter);
    }
    findOne(id) {
        return this.adjustments.findOne(id);
    }
    apply(id) {
        return this.adjustments.apply(id);
    }
    reject(id, reason) {
        return this.adjustments.reject(id, reason);
    }
};
exports.AdjustmentsController = AdjustmentsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_adjustment_dto_1.CreateAdjustmentDto, Object]),
    __metadata("design:returntype", void 0)
], AdjustmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [adjustment_filter_dto_1.AdjustmentFilterDto]),
    __metadata("design:returntype", void 0)
], AdjustmentsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdjustmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/apply'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdjustmentsController.prototype, "apply", null);
__decorate([
    (0, common_1.Post)(':id/reject'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)('reason')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdjustmentsController.prototype, "reject", null);
exports.AdjustmentsController = AdjustmentsController = __decorate([
    (0, common_1.Controller)('adjustments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [adjustments_service_1.AdjustmentsService])
], AdjustmentsController);
//# sourceMappingURL=adjustments.controller.js.map