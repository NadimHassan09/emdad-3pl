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
exports.BillingPlansController = void 0;
const common_1 = require("@nestjs/common");
const billing_service_1 = require("./billing.service");
const create_billing_plan_dto_1 = require("./dto/create-billing-plan.dto");
const update_billing_plan_dto_1 = require("./dto/update-billing-plan.dto");
const billing_plan_filter_dto_1 = require("./dto/billing-plan-filter.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let BillingPlansController = class BillingPlansController {
    constructor(billing) {
        this.billing = billing;
    }
    create(dto) {
        return this.billing.createPlan(dto);
    }
    findMany(filter) {
        return this.billing.findManyPlans(filter);
    }
    findOne(id) {
        return this.billing.findOnePlan(id);
    }
    update(id, dto) {
        return this.billing.updatePlan(id, dto);
    }
};
exports.BillingPlansController = BillingPlansController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_billing_plan_dto_1.CreateBillingPlanDto]),
    __metadata("design:returntype", void 0)
], BillingPlansController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [billing_plan_filter_dto_1.BillingPlanFilterDto]),
    __metadata("design:returntype", void 0)
], BillingPlansController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BillingPlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_billing_plan_dto_1.UpdateBillingPlanDto]),
    __metadata("design:returntype", void 0)
], BillingPlansController.prototype, "update", null);
exports.BillingPlansController = BillingPlansController = __decorate([
    (0, common_1.Controller)('billing/plans'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [billing_service_1.BillingService])
], BillingPlansController);
//# sourceMappingURL=billing-plans.controller.js.map