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
exports.BatchesController = void 0;
const common_1 = require("@nestjs/common");
const batches_service_1 = require("./batches.service");
const create_batch_dto_1 = require("./dto/create-batch.dto");
const update_batch_dto_1 = require("./dto/update-batch.dto");
const batch_filter_dto_1 = require("./dto/batch-filter.dto");
let BatchesController = class BatchesController {
    constructor(batches) {
        this.batches = batches;
    }
    create(dto) {
        return this.batches.create(dto);
    }
    findMany(filter) {
        return this.batches.findMany(filter);
    }
    findOne(id) {
        return this.batches.findOne(id);
    }
    update(id, dto) {
        return this.batches.update(id, dto);
    }
};
exports.BatchesController = BatchesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_batch_dto_1.CreateBatchDto]),
    __metadata("design:returntype", void 0)
], BatchesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batch_filter_dto_1.BatchFilterDto]),
    __metadata("design:returntype", void 0)
], BatchesController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BatchesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_batch_dto_1.UpdateBatchDto]),
    __metadata("design:returntype", void 0)
], BatchesController.prototype, "update", null);
exports.BatchesController = BatchesController = __decorate([
    (0, common_1.Controller)('batches'),
    __metadata("design:paramtypes", [batches_service_1.BatchesService])
], BatchesController);
//# sourceMappingURL=batches.controller.js.map