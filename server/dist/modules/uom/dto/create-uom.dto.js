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
exports.CreateUomDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const class_validator_2 = require("class-validator");
const uom_dimension_enum_1 = require("../../../common/enums/uom-dimension.enum");
class CreateUomDto {
}
exports.CreateUomDto = CreateUomDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(1),
    (0, class_validator_2.MaxLength)(20),
    __metadata("design:type", String)
], CreateUomDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(1),
    (0, class_validator_2.MaxLength)(100),
    __metadata("design:type", String)
], CreateUomDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(uom_dimension_enum_1.UomDimension),
    __metadata("design:type", String)
], CreateUomDto.prototype, "dimension", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateUomDto.prototype, "baseConversion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateUomDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-uom.dto.js.map