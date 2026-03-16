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
exports.ClientSettingsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
const client_settings_service_1 = require("./client-settings.service");
const update_client_profile_dto_1 = require("./dto/update-client-profile.dto");
const change_client_password_dto_1 = require("./dto/change-client-password.dto");
const update_client_preferences_dto_1 = require("./dto/update-client-preferences.dto");
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
let ClientSettingsController = class ClientSettingsController {
    constructor(settings) {
        this.settings = settings;
    }
    getMe(actor) {
        return this.settings.getMe(actor);
    }
    updateProfile(actor, dto) {
        return this.settings.updateProfile(actor, dto);
    }
    changePassword(actor, dto) {
        return this.settings.changePassword(actor, dto);
    }
    updatePreferences(actor, dto) {
        return this.settings.updatePreferences(actor, dto);
    }
};
exports.ClientSettingsController = ClientSettingsController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "getMe", null);
__decorate([
    (0, common_1.Patch)('me/profile'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_profile_dto_1.UpdateClientProfileDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)('me/password'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_client_password_dto_1.ChangeClientPasswordDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Patch)('me/preferences'),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_client_preferences_dto_1.UpdateClientPreferencesDto]),
    __metadata("design:returntype", void 0)
], ClientSettingsController.prototype, "updatePreferences", null);
exports.ClientSettingsController = ClientSettingsController = __decorate([
    (0, common_1.Controller)('client-settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [client_settings_service_1.ClientSettingsService])
], ClientSettingsController);
//# sourceMappingURL=client-settings.controller.js.map