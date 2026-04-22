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
exports.ClientsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const permissions_guard_1 = require("../../common/guards/permissions.guard");
const require_permissions_decorator_1 = require("../../common/decorators/require-permissions.decorator");
const clients_service_1 = require("./clients.service");
const create_client_dto_1 = require("./dto/create-client.dto");
const update_client_dto_1 = require("./dto/update-client.dto");
const client_filter_dto_1 = require("./dto/client-filter.dto");
const create_client_role_dto_1 = require("./dto/create-client-role.dto");
const update_client_role_dto_1 = require("./dto/update-client-role.dto");
const create_client_account_dto_1 = require("./dto/create-client-account.dto");
const update_client_account_dto_1 = require("./dto/update-client-account.dto");
const set_client_account_active_dto_1 = require("./dto/set-client-account-active.dto");
const onboard_client_dto_1 = require("./dto/onboard-client.dto");
let ClientsController = class ClientsController {
    constructor(clients) {
        this.clients = clients;
    }
    create(dto) {
        return this.clients.create(dto);
    }
    findMany(filter) {
        return this.clients.findMany(filter);
    }
    onboard(dto) {
        return this.clients.onboard(dto);
    }
    getRoleCatalog() {
        return this.clients.getClientPermissionCatalog();
    }
    findClientRoles() {
        return this.clients.findAllClientRoles();
    }
    findClientRolesWithPermissions() {
        return this.clients.findAllClientRolesWithPermissions();
    }
    createClientRole(dto) {
        return this.clients.createClientRole(dto);
    }
    updateClientRole(roleId, dto) {
        return this.clients.updateClientRole(roleId, dto);
    }
    backfillClientRoles() {
        return this.clients.backfillClientRolePermissions();
    }
    findOne(id) {
        return this.clients.findOne(id);
    }
    findAccounts(id) {
        return this.clients.findAccounts(id);
    }
<<<<<<< HEAD
=======
    createAccount(id, dto) {
        return this.clients.createAccount(id, dto);
    }
    updateAccount(id, accountId, dto) {
        return this.clients.updateAccount(id, accountId, dto);
    }
    setAccountActive(id, accountId, dto) {
        return this.clients.setAccountActive(id, accountId, dto.isActive);
    }
>>>>>>> d5f264cd6ecebd7ca41983abd6a16dca8a8da1cd
    update(id, dto) {
        return this.clients.update(id, dto);
    }
};
exports.ClientsController = ClientsController;
__decorate([
    (0, common_1.Post)(),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, require_permissions_decorator_1.RequirePermissions)('users:view'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_filter_dto_1.ClientFilterDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('onboard'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [onboard_client_dto_1.OnboardClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "onboard", null);
__decorate([
    (0, common_1.Get)('roles/catalog'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "getRoleCatalog", null);
__decorate([
    (0, common_1.Get)('roles'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findClientRoles", null);
__decorate([
    (0, common_1.Get)('roles/with-permissions'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findClientRolesWithPermissions", null);
__decorate([
    (0, common_1.Post)('roles'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_role_dto_1.CreateClientRoleDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createClientRole", null);
__decorate([
    (0, common_1.Patch)('roles/:roleId'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Param)('roleId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_role_dto_1.UpdateClientRoleDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updateClientRole", null);
__decorate([
    (0, common_1.Post)('roles/backfill'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "backfillClientRoles", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:view'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/accounts'),
<<<<<<< HEAD
=======
    (0, require_permissions_decorator_1.RequirePermissions)('users:view'),
>>>>>>> d5f264cd6ecebd7ca41983abd6a16dca8a8da1cd
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "findAccounts", null);
__decorate([
<<<<<<< HEAD
=======
    (0, common_1.Post)(':id/accounts'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_client_account_dto_1.CreateClientAccountDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Patch)(':id/accounts/:accountId'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('accountId', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_client_account_dto_1.UpdateClientAccountDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "updateAccount", null);
__decorate([
    (0, common_1.Patch)(':id/accounts/:accountId/active'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('accountId', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, set_client_account_active_dto_1.SetClientAccountActiveDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "setAccountActive", null);
__decorate([
>>>>>>> d5f264cd6ecebd7ca41983abd6a16dca8a8da1cd
    (0, common_1.Patch)(':id'),
    (0, require_permissions_decorator_1.RequirePermissions)('users:manage'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_client_dto_1.UpdateClientDto]),
    __metadata("design:returntype", void 0)
], ClientsController.prototype, "update", null);
exports.ClientsController = ClientsController = __decorate([
    (0, common_1.Controller)('clients'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ClientsController);
//# sourceMappingURL=clients.controller.js.map