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
exports.ReturnOrdersController = void 0;
const common_1 = require("@nestjs/common");
const return_orders_service_1 = require("./return-orders.service");
const create_return_order_dto_1 = require("./dto/create-return-order.dto");
const return_order_filter_dto_1 = require("./dto/return-order-filter.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
common_1.Controller,
    common_1.Get,
    common_1.Post,
    common_1.Body,
    common_1.Param,
    common_1.Query,
    common_1.ParseUUIDPipe,
    common_1.UseGuards,
;
from;
'@nestjs/common';
let ReturnOrdersController = class ReturnOrdersController {
    constructor(returnOrders) {
        this.returnOrders = returnOrders;
    }
    create(dto) {
        return this.returnOrders.create(dto);
    }
    findMany(filter) {
        return this.returnOrders.findMany(filter);
    }
    findOne(id) {
        return this.returnOrders.findOne(id);
    }
    process(id) {
        return this.returnOrders.process(id);
    }
};
exports.ReturnOrdersController = ReturnOrdersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_return_order_dto_1.CreateReturnOrderDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [return_order_filter_dto_1.ReturnOrderFilterDto]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/process'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReturnOrdersController.prototype, "process", null);
exports.ReturnOrdersController = ReturnOrdersController = __decorate([
    (0, common_1.Controller)('return-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [return_orders_service_1.ReturnOrdersService])
], ReturnOrdersController);
//# sourceMappingURL=return-orders.controller.js.map