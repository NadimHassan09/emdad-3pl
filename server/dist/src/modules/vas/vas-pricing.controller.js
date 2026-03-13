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
exports.VasPricingController = void 0;
const common_1 = require("@nestjs/common");
const vas_service_1 = require("./vas.service");
const create_vas_pricing_dto_1 = require("./dto/create-vas-pricing.dto");
const update_vas_pricing_dto_1 = require("./dto/update-vas-pricing.dto");
const vas_pricing_filter_dto_1 = require("./dto/vas-pricing-filter.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let VasPricingController = class VasPricingController {
    constructor(vas) {
        this.vas = vas;
    }
    create(dto) {
        return this.vas.createVasPricing(dto);
    }
    findMany(filter) {
        return this.vas.findManyVasPricing(filter);
    }
    findOne(id) {
        return this.vas.findOneVasPricing(id);
    }
    update(id, dto) {
        return this.vas.updateVasPricing(id, dto);
    }
};
exports.VasPricingController = VasPricingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vas_pricing_dto_1.CreateVasPricingDto]),
    __metadata("design:returntype", void 0)
], VasPricingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vas_pricing_filter_dto_1.VasPricingFilterDto]),
    __metadata("design:returntype", void 0)
], VasPricingController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VasPricingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vas_pricing_dto_1.UpdateVasPricingDto]),
    __metadata("design:returntype", void 0)
], VasPricingController.prototype, "update", null);
exports.VasPricingController = VasPricingController = __decorate([
    (0, common_1.Controller)('vas/pricing'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [vas_service_1.VasService])
], VasPricingController);
//# sourceMappingURL=vas-pricing.controller.js.map