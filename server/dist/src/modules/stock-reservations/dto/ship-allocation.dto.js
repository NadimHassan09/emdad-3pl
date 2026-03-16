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
exports.ShipAllocationDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
class_validator_1.IsUUID,
    class_validator_1.IsNotEmpty,
    class_validator_1.IsNumber,
    class_validator_1.IsOptional,
    class_validator_1.Min,
;
from;
'class-validator';
class ShipAllocationDto {
}
exports.ShipAllocationDto = ShipAllocationDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "allocationId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ShipAllocationDto.prototype, "shippedQty", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "batchId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ShipAllocationDto.prototype, "locationId", void 0);
//# sourceMappingURL=ship-allocation.dto.js.map