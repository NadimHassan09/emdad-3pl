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
exports.BillingClientPortalController = void 0;
const common_1 = require("@nestjs/common");
const billing_service_1 = require("./billing.service");
const client_portal_invoice_query_dto_1 = require("./dto/client-portal-invoice-query.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const client_account_guard_1 = require("../../common/guards/client-account.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
let BillingClientPortalController = class BillingClientPortalController {
    constructor(billing) {
        this.billing = billing;
    }
    listInvoices(actor, query) {
        return this.billing.findManyInvoicesForClientPortal(actor.clientId, query);
    }
    getInvoice(id, actor) {
        return this.billing.findOneInvoiceForClientPortal(actor.clientId, id);
    }
    getOverview(actor) {
        return this.billing.getClientPortalBillingOverview(actor.clientId);
    }
};
exports.BillingClientPortalController = BillingClientPortalController;
__decorate([
    (0, common_1.Get)('invoices'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, client_portal_invoice_query_dto_1.ClientPortalInvoiceQueryDto]),
    __metadata("design:returntype", void 0)
], BillingClientPortalController.prototype, "listInvoices", null);
__decorate([
    (0, common_1.Get)('invoices/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BillingClientPortalController.prototype, "getInvoice", null);
__decorate([
    (0, common_1.Get)('overview'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BillingClientPortalController.prototype, "getOverview", null);
exports.BillingClientPortalController = BillingClientPortalController = __decorate([
    (0, common_1.Controller)('billing/client-portal'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __metadata("design:paramtypes", [billing_service_1.BillingService])
], BillingClientPortalController);
//# sourceMappingURL=billing-client-portal.controller.js.map