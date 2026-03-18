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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const product_filter_dto_1 = require("./dto/product-filter.dto");
const create_product_client_portal_dto_1 = require("./dto/create-product-client-portal.dto");
const update_product_client_portal_dto_1 = require("./dto/update-product-client-portal.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const client_account_guard_1 = require("../../common/guards/client-account.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
let ProductsController = class ProductsController {
    constructor(products) {
        this.products = products;
    }
    findManyClientPortal(actor) {
        return this.products.findManyForClientPortal(actor.clientId);
    }
    findMyProducts(actor) {
        return this.products.findManyForClientPortal(actor.clientId);
    }
    createForClientPortal(actor, dto) {
        return this.products.createForClientPortal(actor.clientId, dto);
    }
    updateForClientPortal(actor, id, dto) {
        return this.products.updateForClientPortal(id, actor.clientId, dto);
    }
    deleteForClientPortal(actor, id) {
        return this.products.deleteForClientPortal(id, actor.clientId);
    }
    create(dto) {
        return this.products.create(dto);
    }
    findMany(filter) {
        return this.products.findMany(filter);
    }
    findOne(id) {
        return this.products.findOne(id);
    }
    update(id, dto) {
        return this.products.update(id, dto);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('client-portal/list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findManyClientPortal", null);
__decorate([
    (0, common_1.Get)('my'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findMyProducts", null);
__decorate([
    (0, common_1.Post)('client-portal'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_client_portal_dto_1.CreateProductClientPortalDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createForClientPortal", null);
__decorate([
    (0, common_1.Patch)('client-portal/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_product_client_portal_dto_1.UpdateProductClientPortalDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateForClientPortal", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteForClientPortal", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_filter_dto_1.ProductFilterDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map