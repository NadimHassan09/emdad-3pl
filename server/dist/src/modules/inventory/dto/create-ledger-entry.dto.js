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
exports.CreateLedgerEntryDto = void 0;
const class_validator_1 = require("class-validator");
const movement_type_enum_1 = require("../../../common/enums/movement-type.enum");
const class_transformer_1 = require("class-transformer");
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
class_validator_1.IsEnum,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.IsString,
    class_validator_1.Min,
;
from;
'class-validator';
class CreateLedgerEntryDto {
}
exports.CreateLedgerEntryDto = CreateLedgerEntryDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "locationId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(movement_type_enum_1.MovementType),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "movementType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateLedgerEntryDto.prototype, "qtyChange", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateLedgerEntryDto.prototype, "referenceId", void 0);
//# sourceMappingURL=create-ledger-entry.dto.js.map