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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBillingPlanDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const billing_cycle_enum_1 = require("../../../common/enums/billing-cycle.enum");
const class_validator_2 = require("class-validator");
class CreateBillingPlanDto {
}
exports.CreateBillingPlanDto = CreateBillingPlanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(1),
    (0, class_validator_2.MaxLength)(100),
    __metadata("design:type", String)
], CreateBillingPlanDto.prototype, "planName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateBillingPlanDto.prototype, "storageIncluded", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(billing_cycle_enum_1.BillingCycleEnum),
    __metadata("design:type", String)
], CreateBillingPlanDto.prototype, "billingCycle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBillingPlanDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-billing-plan.dto.js.map