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
exports.StockReservationsController = void 0;
const common_1 = require("@nestjs/common");
const stock_reservations_service_1 = require("./stock-reservations.service");
const pick_allocation_dto_1 = require("./dto/pick-allocation.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let StockReservationsController = class StockReservationsController {
    constructor(stockReservations) {
        this.stockReservations = stockReservations;
    }
    findOne(id) {
        return this.stockReservations.findOne(id);
    }
    confirm(id) {
        return this.stockReservations.confirm(id);
    }
    release(id) {
        return this.stockReservations.release(id);
    }
    pickAllocation(id, dto) {
        return this.stockReservations.pickAllocation(id, dto);
    }
};
exports.StockReservationsController = StockReservationsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/release'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "release", null);
__decorate([
    (0, common_1.Post)('outbound-allocations/:id/pick'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pick_allocation_dto_1.PickAllocationDto]),
    __metadata("design:returntype", void 0)
], StockReservationsController.prototype, "pickAllocation", null);
exports.StockReservationsController = StockReservationsController = __decorate([
    (0, common_1.Controller)('stock-reservations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [stock_reservations_service_1.StockReservationsService])
], StockReservationsController);
//# sourceMappingURL=stock-reservations.controller.js.map