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
exports.ClientPortalTeamController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const client_account_guard_1 = require("../../common/guards/client-account.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
const client_portal_team_service_1 = require("./client-portal-team.service");
const client_portal_team_query_dto_1 = require("./dto/client-portal-team-query.dto");
const invite_team_account_dto_1 = require("./dto/invite-team-account.dto");
const update_team_account_dto_1 = require("./dto/update-team-account.dto");
const set_team_account_active_dto_1 = require("./dto/set-team-account-active.dto");
let ClientPortalTeamController = class ClientPortalTeamController {
    constructor(team) {
        this.team = team;
    }
    listRoles() {
        return this.team.listRoles();
    }
    listAccounts(actor, query) {
        return this.team.listAccounts(actor.clientId, query);
    }
    invite(actor, dto) {
        return this.team.invite(actor, actor.clientId, dto);
    }
    update(id, actor, dto) {
        return this.team.update(actor, actor.clientId, id, dto);
    }
    setActive(id, actor, dto) {
        return this.team.setActive(actor, actor.clientId, id, dto.isActive);
    }
};
exports.ClientPortalTeamController = ClientPortalTeamController;
__decorate([
    (0, common_1.Get)('roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientPortalTeamController.prototype, "listRoles", null);
__decorate([
    (0, common_1.Get)('accounts'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, client_portal_team_query_dto_1.ClientPortalTeamQueryDto]),
    __metadata("design:returntype", void 0)
], ClientPortalTeamController.prototype, "listAccounts", null);
__decorate([
    (0, common_1.Post)('accounts'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, invite_team_account_dto_1.InviteTeamAccountDto]),
    __metadata("design:returntype", void 0)
], ClientPortalTeamController.prototype, "invite", null);
__decorate([
    (0, common_1.Patch)('accounts/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_team_account_dto_1.UpdateTeamAccountDto]),
    __metadata("design:returntype", void 0)
], ClientPortalTeamController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('accounts/:id/active'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_actor_decorator_1.CurrentActor)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, set_team_account_active_dto_1.SetTeamAccountActiveDto]),
    __metadata("design:returntype", void 0)
], ClientPortalTeamController.prototype, "setActive", null);
exports.ClientPortalTeamController = ClientPortalTeamController = __decorate([
    (0, common_1.Controller)('client-portal/team'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, client_account_guard_1.ClientAccountGuard),
    __metadata("design:paramtypes", [client_portal_team_service_1.ClientPortalTeamService])
], ClientPortalTeamController);
//# sourceMappingURL=client-portal-team.controller.js.map