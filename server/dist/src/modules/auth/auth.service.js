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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const actor_type_enum_1 = require("../../common/enums/actor-type.enum");
const clients_service_1 = require("../clients/clients.service");
const users_service_1 = require("../users/users.service");
const actors_service_1 = require("../actors/actors.service");
function verifyRefreshToken(jwtService, token) {
    return jwtService.verify(token);
}
function parsePermissions(permissionsJson) {
    if (Array.isArray(permissionsJson)) {
        return permissionsJson.filter((p) => typeof p === 'string');
    }
    if (permissionsJson &&
        typeof permissionsJson === 'object' &&
        'permissions' in permissionsJson) {
        const p = permissionsJson.permissions;
        return Array.isArray(p)
            ? p.filter((x) => typeof x === 'string')
            : [];
    }
    return [];
}
let AuthService = class AuthService {
    constructor(config, jwt, clients, users, actors) {
        this.config = config;
        this.jwt = jwt;
        this.clients = clients;
        this.users = users;
        this.actors = actors;
    }
    getAccessExpiresIn() {
        const val = this.config.get('JWT_ACCESS_EXPIRES_IN', 900);
        return typeof val === 'string' ? parseInt(val, 10) : val;
    }
    getRefreshExpiresIn() {
        const val = this.config.get('JWT_REFRESH_EXPIRES_IN', 604800);
        return typeof val === 'string' ? parseInt(val, 10) : val;
    }
    async clientLogin(email, password) {
        const account = await this.clients.validateClientAccountCredentials(email, password);
        const actor = await this.actors.getOrCreateForClientAccount(account.id);
        const role = account.clientRole.roleName;
        const permissions = parsePermissions(account.clientRole.permissionsJson);
        const payload = {
            actorId: actor.id,
            actorType: actor_type_enum_1.ActorType.CLIENT_ACCOUNT,
            sub: account.id,
            clientId: account.clientId,
            role,
            permissions,
            type: 'access',
        };
        const refreshPayload = { ...payload, type: 'refresh' };
        const accessToken = this.jwt.sign(payload, {
            expiresIn: this.getAccessExpiresIn(),
        });
        const refreshToken = this.jwt.sign(refreshPayload, {
            expiresIn: this.getRefreshExpiresIn(),
        });
        return {
            accessToken,
            refreshToken,
            expiresIn: this.getAccessExpiresIn(),
            user: payload,
        };
    }
    async staffLogin(email, password) {
        const user = await this.users.validateUserCredentials(email, password);
        const actor = await this.actors.getOrCreateForUser(user.id);
        const role = user.internalRole?.roleName ?? '';
        const permissions = user.internalRole
            ? parsePermissions(user.internalRole.permissionsJson)
            : [];
        const payload = {
            actorId: actor.id,
            actorType: actor_type_enum_1.ActorType.INTERNAL_USER,
            sub: user.id,
            role,
            permissions,
            type: 'access',
        };
        const refreshPayload = { ...payload, type: 'refresh' };
        const accessToken = this.jwt.sign(payload, {
            expiresIn: this.getAccessExpiresIn(),
        });
        const refreshToken = this.jwt.sign(refreshPayload, {
            expiresIn: this.getRefreshExpiresIn(),
        });
        return {
            accessToken,
            refreshToken,
            expiresIn: this.getAccessExpiresIn(),
            user: payload,
        };
    }
    refresh(refreshToken) {
        let payload;
        try {
            const decoded = verifyRefreshToken(this.jwt, refreshToken);
            if (decoded.type !== 'refresh')
                throw new common_1.UnauthorizedException('Invalid token type');
            payload = decoded;
        }
        catch {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        const accessPayload = { ...payload, type: 'access' };
        const accessToken = this.jwt.sign(accessPayload, {
            expiresIn: this.getAccessExpiresIn(),
        });
        return {
            accessToken,
            expiresIn: this.getAccessExpiresIn(),
            user: accessPayload,
        };
    }
    me(payload) {
        return payload;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        clients_service_1.ClientsService,
        users_service_1.UsersService,
        actors_service_1.ActorsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map