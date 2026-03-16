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
exports.InventoryController = void 0;
const common_1 = require("@nestjs/common");
const inventory_service_1 = require("./inventory.service");
const current_stock_filter_dto_1 = require("./dto/current-stock-filter.dto");
const inventory_ledger_filter_dto_1 = require("./dto/inventory-ledger-filter.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
common_1.Get,
    common_1.Query,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getDashboard(actor) {
        return this.inventoryService.getDashboard(actor.clientId);
    }
    findCurrentStock(filter) {
        return this.inventoryService.findCurrentStock(filter);
    }
    findCurrentStockByProduct(productId, filter) {
        return this.inventoryService.findCurrentStockByProduct(productId, filter);
    }
    findLedger(filter) {
        return this.inventoryService.findLedger(filter);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('current-stock'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStock", null);
__decorate([
    (0, common_1.Get)('current-stock/by-product/:productId'),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, current_stock_filter_dto_1.CurrentStockFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findCurrentStockByProduct", null);
__decorate([
    (0, common_1.Get)('ledger'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_ledger_filter_dto_1.InventoryLedgerFilterDto]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "findLedger", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
//# sourceMappingURL=inventory.controller.js.map