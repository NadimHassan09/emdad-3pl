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
exports.ClientPortalTeamService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const actors_service_1 = require("../actors/actors.service");
const CLIENT_ADMIN_ROLE = 'CLIENT_ADMIN';
let ClientPortalTeamService = class ClientPortalTeamService {
    constructor(prisma, actors) {
        this.prisma = prisma;
        this.actors = actors;
    }
    requireClientAdmin(actor) {
        if (actor.role !== CLIENT_ADMIN_ROLE) {
            throw new common_1.ForbiddenException('Only client administrators can perform this action.');
        }
    }
    async listRoles() {
        return this.prisma.clientRole.findMany({
            where: { isActive: true },
            select: { id: true, roleName: true },
            orderBy: { roleName: 'asc' },
        });
    }
    async listAccounts(clientId, query) {
        const where = { clientId };
        if (query?.isActive !== undefined) {
            where.isActive = query.isActive;
        }
        if (query?.clientRoleId) {
            where.clientRoleId = query.clientRoleId;
        }
        if (query?.search?.trim()) {
            const s = query.search.trim();
            where.OR = [
                { email: { contains: s, mode: 'insensitive' } },
                { firstName: { contains: s, mode: 'insensitive' } },
                { lastName: { contains: s, mode: 'insensitive' } },
            ];
        }
        const rows = await this.prisma.clientAccount.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                isActive: true,
                clientRoleId: true,
                createdAt: true,
                clientRole: { select: { roleName: true } },
            },
        });
        return rows.map((r) => ({
            id: r.id,
            firstName: r.firstName,
            lastName: r.lastName,
            email: r.email,
            isActive: r.isActive,
            clientRoleId: r.clientRoleId,
            roleName: r.clientRole.roleName,
            createdAt: r.createdAt,
        }));
    }
    async getAccountInClientOrThrow(clientId, accountId) {
        const acc = await this.prisma.clientAccount.findFirst({
            where: { id: accountId, clientId },
            include: { clientRole: { select: { roleName: true } } },
        });
        if (!acc)
            throw new common_1.NotFoundException('Team member not found');
        return acc;
    }
    async invite(actor, clientId, dto) {
        this.requireClientAdmin(actor);
        const role = await this.prisma.clientRole.findFirst({
            where: { id: dto.clientRoleId, isActive: true },
        });
        if (!role)
            throw new common_1.NotFoundException('Role not found');
        const email = dto.email.trim().toLowerCase();
        const existing = await this.prisma.clientAccount.findUnique({
            where: { email },
        });
        if (existing) {
            throw new common_1.ConflictException('An account with this email already exists');
        }
        const tempPassword = (0, crypto_1.randomBytes)(12).toString('base64url');
        const passwordHash = await bcrypt.hash(tempPassword, 10);
        const account = await this.prisma.clientAccount.create({
            data: {
                clientId,
                clientRoleId: dto.clientRoleId,
                email,
                passwordHash,
                firstName: dto.firstName.trim(),
                lastName: dto.lastName.trim(),
                isActive: true,
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                isActive: true,
                clientRoleId: true,
                createdAt: true,
                clientRole: { select: { roleName: true } },
            },
        });
        await this.actors.getOrCreateForClientAccount(account.id);
        return {
            account: {
                id: account.id,
                firstName: account.firstName,
                lastName: account.lastName,
                email: account.email,
                isActive: account.isActive,
                clientRoleId: account.clientRoleId,
                roleName: account.clientRole.roleName,
                createdAt: account.createdAt,
            },
            temporaryPassword: tempPassword,
        };
    }
    async update(actor, clientId, accountId, dto) {
        const acc = await this.getAccountInClientOrThrow(clientId, accountId);
        const isSelf = actor.sub === accountId;
        const isAdmin = actor.role === CLIENT_ADMIN_ROLE;
        if (!isSelf && !isAdmin) {
            throw new common_1.ForbiddenException('You can only update your own profile');
        }
        if (isSelf && !isAdmin && dto.clientRoleId !== undefined) {
            throw new common_1.ForbiddenException('You cannot change your own role');
        }
        const data = {};
        if (dto.firstName !== undefined)
            data.firstName = dto.firstName.trim();
        if (dto.lastName !== undefined)
            data.lastName = dto.lastName.trim();
        if (dto.email !== undefined) {
            const email = dto.email.trim().toLowerCase();
            if (email !== acc.email) {
                const taken = await this.prisma.clientAccount.findUnique({
                    where: { email },
                });
                if (taken)
                    throw new common_1.ConflictException('Email already in use');
            }
            data.email = email;
        }
        if (dto.clientRoleId !== undefined) {
            if (!isAdmin)
                throw new common_1.ForbiddenException('Only administrators can change roles');
            const role = await this.prisma.clientRole.findFirst({
                where: { id: dto.clientRoleId, isActive: true },
            });
            if (!role)
                throw new common_1.NotFoundException('Role not found');
            data.clientRole = { connect: { id: dto.clientRoleId } };
        }
        const updated = await this.prisma.clientAccount.update({
            where: { id: accountId },
            data,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                isActive: true,
                clientRoleId: true,
                createdAt: true,
                clientRole: { select: { roleName: true } },
            },
        });
        return {
            id: updated.id,
            firstName: updated.firstName,
            lastName: updated.lastName,
            email: updated.email,
            isActive: updated.isActive,
            clientRoleId: updated.clientRoleId,
            roleName: updated.clientRole.roleName,
            createdAt: updated.createdAt,
        };
    }
    async setActive(actor, clientId, accountId, isActive) {
        this.requireClientAdmin(actor);
        if (actor.sub === accountId && !isActive) {
            throw new common_1.ForbiddenException('You cannot deactivate your own account');
        }
        await this.getAccountInClientOrThrow(clientId, accountId);
        await this.prisma.clientAccount.update({
            where: { id: accountId },
            data: { isActive },
        });
        return { id: accountId, isActive };
    }
};
exports.ClientPortalTeamService = ClientPortalTeamService;
exports.ClientPortalTeamService = ClientPortalTeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        actors_service_1.ActorsService])
], ClientPortalTeamService);
//# sourceMappingURL=client-portal-team.service.js.map