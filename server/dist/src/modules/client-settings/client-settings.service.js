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
var ClientSettingsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSettingsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const actor_type_enum_1 = require("../../common/enums/actor-type.enum");
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
common_1.ForbiddenException,
    common_1.Injectable,
    common_1.NotFoundException,
    common_1.UnauthorizedException,
;
from;
'@nestjs/common';
const DEFAULT_PREFERENCES = {
    language: 'العربية',
    timezone: 'Asia/Riyadh',
    notificationsEnabled: true,
    twoFactorEnabled: false,
};
let ClientSettingsService = ClientSettingsService_1 = class ClientSettingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ensureClientActor(actor) {
        if (actor.actorType !== actor_type_enum_1.ActorType.CLIENT_ACCOUNT) {
            throw new common_1.ForbiddenException('Client settings are only available for client accounts');
        }
        return actor.sub;
    }
    async findAccountOrThrow(accountId) {
        const account = await this.prisma.clientAccount.findUnique({
            where: { id: accountId },
            include: {
                client: { select: { id: true, code: true, name: true } },
                clientRole: { select: { roleName: true } },
            },
        });
        if (!account)
            throw new common_1.NotFoundException('Client account not found');
        return account;
    }
    getPreferences(accountId) {
        return (ClientSettingsService_1.preferenceStore.get(accountId) ?? {
            ...DEFAULT_PREFERENCES,
        });
    }
    setPreferences(accountId, updates) {
        const next = {
            ...this.getPreferences(accountId),
            ...updates,
        };
        ClientSettingsService_1.preferenceStore.set(accountId, next);
        return next;
    }
    async getMe(actor) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const preferences = this.getPreferences(accountId);
        return {
            profile: {
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
            },
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
    async updateProfile(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        const updated = await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: {
                ...(dto.firstName !== undefined && { firstName: dto.firstName.trim() }),
                ...(dto.lastName !== undefined && { lastName: dto.lastName.trim() }),
                ...(dto.email !== undefined && { email: dto.email.trim().toLowerCase() }),
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
            },
        });
        return { profile: updated };
    }
    async changePassword(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        const account = await this.findAccountOrThrow(accountId);
        if (!account.passwordHash) {
            throw new common_1.UnauthorizedException('Password is not configured for this account');
        }
        const valid = await bcrypt.compare(dto.currentPassword, account.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, 10);
        await this.prisma.clientAccount.update({
            where: { id: account.id },
            data: { passwordHash },
        });
        return { success: true };
    }
    async updatePreferences(actor, dto) {
        const accountId = this.ensureClientActor(actor);
        await this.findAccountOrThrow(accountId);
        const preferences = this.setPreferences(accountId, {
            ...(dto.language !== undefined && { language: dto.language }),
            ...(dto.timezone !== undefined && { timezone: dto.timezone }),
            ...(dto.notificationsEnabled !== undefined && {
                notificationsEnabled: dto.notificationsEnabled,
            }),
        });
        return {
            preferences: {
                language: preferences.language,
                timezone: preferences.timezone,
                notificationsEnabled: preferences.notificationsEnabled,
            },
            security: {
                twoFactorEnabled: preferences.twoFactorEnabled,
                activeSessions: 1,
            },
        };
    }
};
exports.ClientSettingsService = ClientSettingsService;
ClientSettingsService.preferenceStore = new Map();
exports.ClientSettingsService = ClientSettingsService = ClientSettingsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientSettingsService);
//# sourceMappingURL=client-settings.service.js.map