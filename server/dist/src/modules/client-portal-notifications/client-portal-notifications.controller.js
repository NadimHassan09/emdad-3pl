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
exports.ClientPortalNotificationsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const client_account_guard_1 = require("../../common/guards/client-account.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
const client_portal_notifications_service_1 = require("./client-portal-notifications.service");
const client_portal_notification_query_dto_1 = require("./dto/client-portal-notification-query.dto");
const unread_query_dto_1 = require("./dto/unread-query.dto");
let ClientPortalNotificationsController = class ClientPortalNotificationsController {
    constructor(notifications) {
        this.notifications = notifications;
    }
    list(actor, query) {
        return this.notifications.listForActor(actor, query);
    }
    findUnread(actor, query) {
        return this.notifications.findUnreadForActor(actor, query.limit ?? 5);
    }
    markAllRead(actor) {
        return this.notifications.markAllReadForActor(actor);
    }
    markRead(id, actor) {
        return this.notifications.markRead(actor, id);
    }
    delete(id, actor) {
        return this.notifications.deleteForActor(actor, id);
    }
};
exports.ClientPortalNotificationsController = ClientPortalNotificationsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, client_portal_notification_query_dto_1.ClientPortalNotificationQueryDto]),
    __metadata("design:returntype", void 0)
], ClientPortalNotificationsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('unread'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, unread_query_dto_1.UnreadNotificationsQueryDto]),
    __metadata("design:returntype", void 0)
], ClientPortalNotificationsController.prototype, "findUnread", null);
__decorate([
    (0, common_1.Patch)('mark-all-read'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientPortalNotificationsController.prototype, "markAllRead", null);
__decorate([
    (0, common_1.Patch)(':id/read'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientPortalNotificationsController.prototype, "markRead", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientPortalNotificationsController.prototype, "delete", null);
exports.ClientPortalNotificationsController = ClientPortalNotificationsController = __decorate([
    (0, common_1.Controller)('client-portal/notifications'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __metadata("design:paramtypes", [client_portal_notifications_service_1.ClientPortalNotificationsService])
], ClientPortalNotificationsController);
//# sourceMappingURL=client-portal-notifications.controller.js.map