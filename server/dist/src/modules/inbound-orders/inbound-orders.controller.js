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
exports.InboundOrdersController = void 0;
const common_1 = require("@nestjs/common");
const inbound_orders_service_1 = require("./inbound-orders.service");
const create_inbound_order_dto_1 = require("./dto/create-inbound-order.dto");
const update_inbound_order_dto_1 = require("./dto/update-inbound-order.dto");
const inbound_order_filter_dto_1 = require("./dto/inbound-order-filter.dto");
const add_inbound_order_item_dto_1 = require("./dto/add-inbound-order-item.dto");
const receive_inbound_order_dto_1 = require("./dto/receive-inbound-order.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const client_account_guard_1 = require("../../common/guards/client-account.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
const create_inbound_order_client_portal_dto_1 = require("./dto/create-inbound-order-client-portal.dto");
let InboundOrdersController = class InboundOrdersController {
    constructor(inboundOrders) {
        this.inboundOrders = inboundOrders;
    }
    findManyClientPortal(filter, actor) {
        return this.inboundOrders.findManyForClientPortal(actor.clientId, filter);
    }
    findOneClientPortal(ref, actor) {
        if (!ref?.trim()) {
            throw new common_1.BadRequestException('Query parameter ref is required');
        }
        return this.inboundOrders.findOneForClientPortal(actor.clientId, ref);
    }
    createClientPortal(dto, actor) {
        return this.inboundOrders.createForClientPortal(actor.clientId, actor.actorId, dto);
    }
    addItemClientPortal(orderId, dto, actor) {
        return this.inboundOrders.addItemForClientPortal(actor.clientId, orderId, dto);
    }
    create(dto, payload) {
        return this.inboundOrders.create(dto, payload.actorId);
    }
    findMany(filter) {
        return this.inboundOrders.findMany(filter);
    }
    findOne(id) {
        return this.inboundOrders.findOne(id);
    }
    update(id, dto) {
        return this.inboundOrders.update(id, dto);
    }
    addItem(orderId, dto) {
        return this.inboundOrders.addItem(orderId, dto);
    }
    receive(orderId, dto) {
        return this.inboundOrders.receive(orderId, dto);
    }
};
exports.InboundOrdersController = InboundOrdersController;
__decorate([
    (0, common_1.Get)('client-portal'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inbound_order_filter_dto_1.InboundOrderFilterDto, Object]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "findManyClientPortal", null);
__decorate([
    (0, common_1.Get)('client-portal/detail'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Query)('ref')),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "findOneClientPortal", null);
__decorate([
    (0, common_1.Post)('client-portal'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inbound_order_client_portal_dto_1.CreateInboundOrderClientPortalDto, Object]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "createClientPortal", null);
__decorate([
    (0, common_1.Post)('client-portal/:orderId/items'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_inbound_order_item_dto_1.AddInboundOrderItemDto, Object]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "addItemClientPortal", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inbound_order_dto_1.CreateInboundOrderDto, Object]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inbound_order_filter_dto_1.InboundOrderFilterDto]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inbound_order_dto_1.UpdateInboundOrderDto]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/items'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_inbound_order_item_dto_1.AddInboundOrderItemDto]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "addItem", null);
__decorate([
    (0, common_1.Post)(':id/receive'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, receive_inbound_order_dto_1.ReceiveInboundOrderDto]),
    __metadata("design:returntype", void 0)
], InboundOrdersController.prototype, "receive", null);
exports.InboundOrdersController = InboundOrdersController = __decorate([
    (0, common_1.Controller)('inbound-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [inbound_orders_service_1.InboundOrdersService])
], InboundOrdersController);
//# sourceMappingURL=inbound-orders.controller.js.map