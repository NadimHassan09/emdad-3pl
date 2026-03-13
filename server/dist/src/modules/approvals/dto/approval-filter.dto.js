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
exports.ApprovalFilterDto = void 0;
const class_validator_1 = require("class-validator");
const approval_status_enum_1 = require("../../../common/enums/approval-status.enum");
const approval_reference_type_enum_1 = require("../../../common/enums/approval-reference-type.enum");
class ApprovalFilterDto {
}
exports.ApprovalFilterDto = ApprovalFilterDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(approval_status_enum_1.ApprovalStatus),
    __metadata("design:type", String)
], ApprovalFilterDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(approval_reference_type_enum_1.ApprovalReferenceType),
    __metadata("design:type", String)
], ApprovalFilterDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ApprovalFilterDto.prototype, "requestedByActorId", void 0);
//# sourceMappingURL=approval-filter.dto.js.map