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
exports.OutboundOrdersController = void 0;
const common_1 = require("@nestjs/common");
const outbound_orders_service_1 = require("./outbound-orders.service");
const create_outbound_order_dto_1 = require("./dto/create-outbound-order.dto");
const update_outbound_order_dto_1 = require("./dto/update-outbound-order.dto");
const outbound_order_filter_dto_1 = require("./dto/outbound-order-filter.dto");
const add_outbound_order_item_dto_1 = require("./dto/add-outbound-order-item.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const client_account_guard_1 = require("../../common/guards/client-account.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
const create_outbound_order_client_portal_dto_1 = require("./dto/create-outbound-order-client-portal.dto");
const stock_reservations_service_1 = require("../stock-reservations/stock-reservations.service");
const create_reservation_dto_1 = require("../stock-reservations/dto/create-reservation.dto");
const ship_order_dto_1 = require("../stock-reservations/dto/ship-order.dto");
let OutboundOrdersController = class OutboundOrdersController {
    constructor(outboundOrders, stockReservations) {
        this.outboundOrders = outboundOrders;
        this.stockReservations = stockReservations;
    }
    findManyClientPortal(filter, actor) {
        return this.outboundOrders.findManyForClientPortal(actor.clientId, filter);
    }
    findOneClientPortal(ref, actor) {
        if (!ref?.trim()) {
            throw new common_1.BadRequestException('Query parameter ref is required');
        }
        return this.outboundOrders.findOneForClientPortal(actor.clientId, ref);
    }
    createClientPortal(dto, actor) {
        return this.outboundOrders.createForClientPortal(actor.clientId, actor.actorId, dto);
    }
    addItemClientPortal(orderId, dto, actor) {
        return this.outboundOrders.addItemForClientPortal(actor.clientId, orderId, dto);
    }
    create(dto, payload) {
        return this.outboundOrders.create(dto, payload.actorId);
    }
    findMany(filter) {
        return this.outboundOrders.findMany(filter);
    }
    findOne(id) {
        return this.outboundOrders.findOne(id);
    }
    update(id, dto) {
        return this.outboundOrders.update(id, dto);
    }
    addItem(orderId, dto) {
        return this.outboundOrders.addItem(orderId, dto);
    }
    createReservation(outboundOrderId, dto) {
        return this.stockReservations.createReservation(outboundOrderId, dto);
    }
    shipOrder(outboundOrderId, dto) {
        return this.stockReservations.shipOrder(outboundOrderId, dto);
    }
    shipAll(outboundOrderId) {
        return this.stockReservations.autoShipFullOrder(outboundOrderId);
    }
};
exports.OutboundOrdersController = OutboundOrdersController;
__decorate([
    (0, common_1.Get)('client-portal'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [outbound_order_filter_dto_1.OutboundOrderFilterDto, Object]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "findManyClientPortal", null);
__decorate([
    (0, common_1.Get)('client-portal/detail'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Query)('ref')),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "findOneClientPortal", null);
__decorate([
    (0, common_1.Post)('client-portal'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_outbound_order_client_portal_dto_1.CreateOutboundOrderClientPortalDto, Object]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "createClientPortal", null);
__decorate([
    (0, common_1.Post)('client-portal/:orderId/items'),
    (0, common_1.UseGuards)(client_account_guard_1.ClientAccountGuard),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_outbound_order_item_dto_1.AddOutboundOrderItemDto, Object]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "addItemClientPortal", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_outbound_order_dto_1.CreateOutboundOrderDto, Object]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [outbound_order_filter_dto_1.OutboundOrderFilterDto]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_outbound_order_dto_1.UpdateOutboundOrderDto]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/items'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_outbound_order_item_dto_1.AddOutboundOrderItemDto]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "addItem", null);
__decorate([
    (0, common_1.Post)(':id/reservations'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "createReservation", null);
__decorate([
    (0, common_1.Post)(':id/ship'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ship_order_dto_1.ShipOrderDto]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "shipOrder", null);
__decorate([
    (0, common_1.Post)(':id/ship-all'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OutboundOrdersController.prototype, "shipAll", null);
exports.OutboundOrdersController = OutboundOrdersController = __decorate([
    (0, common_1.Controller)('outbound-orders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [outbound_orders_service_1.OutboundOrdersService,
        stock_reservations_service_1.StockReservationsService])
], OutboundOrdersController);
//# sourceMappingURL=outbound-orders.controller.js.map