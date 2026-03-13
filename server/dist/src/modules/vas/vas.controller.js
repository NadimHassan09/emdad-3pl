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
exports.VasController = void 0;
const common_1 = require("@nestjs/common");
const vas_service_1 = require("./vas.service");
const create_vas_dto_1 = require("./dto/create-vas.dto");
const update_vas_dto_1 = require("./dto/update-vas.dto");
const vas_filter_dto_1 = require("./dto/vas-filter.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let VasController = class VasController {
    constructor(vas) {
        this.vas = vas;
    }
    create(dto) {
        return this.vas.createVas(dto);
    }
    findMany(filter) {
        return this.vas.findManyVas(filter);
    }
    findOne(id) {
        return this.vas.findOneVas(id);
    }
    update(id, dto) {
        return this.vas.updateVas(id, dto);
    }
};
exports.VasController = VasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vas_dto_1.CreateVasDto]),
    __metadata("design:returntype", void 0)
], VasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vas_filter_dto_1.VasFilterDto]),
    __metadata("design:returntype", void 0)
], VasController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vas_dto_1.UpdateVasDto]),
    __metadata("design:returntype", void 0)
], VasController.prototype, "update", null);
exports.VasController = VasController = __decorate([
    (0, common_1.Controller)('vas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [vas_service_1.VasService])
], VasController);
//# sourceMappingURL=vas.controller.js.map