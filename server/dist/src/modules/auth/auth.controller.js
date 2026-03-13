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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_client_dto_1 = require("./dto/login-client.dto");
const login_staff_dto_1 = require("./dto/login-staff.dto");
const refresh_token_dto_1 = require("./dto/refresh-token.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const current_actor_decorator_1 = require("../../common/decorators/current-actor.decorator");
let AuthController = class AuthController {
    constructor(auth) {
        this.auth = auth;
    }
    async clientLogin(dto) {
        return this.auth.clientLogin(dto.email, dto.password);
    }
    async staffLogin(dto) {
        return this.auth.staffLogin(dto.email, dto.password);
    }
    refresh(dto) {
        return this.auth.refresh(dto.refreshToken);
    }
    me(payload) {
        return this.auth.me(payload);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('client/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_client_dto_1.LoginClientDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "clientLogin", null);
__decorate([
    (0, common_1.Post)('staff/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_staff_dto_1.LoginStaffDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "staffLogin", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_actor_decorator_1.CurrentActor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map