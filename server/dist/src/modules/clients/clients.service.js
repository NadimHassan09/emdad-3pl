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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const actors_service_1 = require("../actors/actors.service");
const client_permissions_catalog_1 = require("./client-permissions.catalog");
const client_permissions_util_1 = require("./client-permissions.util");
let ClientsService = class ClientsService {
    constructor(prisma, actors) {
        this.prisma = prisma;
        this.actors = actors;
    }
    async findClientAccountByEmail(email) {
        const db = this.prisma;
        const account = await db.clientAccount.findFirst({
            where: { email: email.trim().toLowerCase(), isActive: true },
            include: {
                client: {
                    select: {
                        id: true,
                        code: true,
                        name: true,
                        status: true,
                        isActive: true,
                    },
                },
                clientRole: {
                    select: { id: true, roleName: true, permissionsJson: true },
                },
            },
        });
        return account;
    }
    async validateClientAccountCredentials(email, password) {
        const account = await this.findClientAccountByEmail(email);
        if (!account)
            throw new common_1.UnauthorizedException('Invalid email or password');
        if (!account.client.isActive || account.client.status !== 'ACTIVE') {
            throw new common_1.UnauthorizedException('Client account is not active');
        }
        if (!account.passwordHash)
            throw new common_1.UnauthorizedException('Invalid email or password');
        const valid = await bcrypt.compare(password, account.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('Invalid email or password');
        return account;
    }
    async create(dto) {
        const db = this.prisma;
        return db.client.create({
            data: {
                code: dto.code.trim(),
                name: dto.name.trim(),
                contactEmail: dto.contactEmail?.trim(),
                contactPhone: dto.contactPhone?.trim(),
                addressLine1: dto.addressLine1?.trim(),
                city: dto.city?.trim(),
                stateRegion: dto.stateRegion?.trim(),
                postalCode: dto.postalCode?.trim(),
                countryCode: dto.countryCode?.trim(),
                status: dto.status ?? 'ACTIVE',
                isActive: dto.isActive ?? true,
                currency: dto.currency ?? 'USD',
            },
        });
    }
    getClientPermissionCatalog() {
        return client_permissions_catalog_1.CLIENT_PERMISSION_CATALOG;
    }
    async findAllClientRoles() {
        const rows = await this.prisma.clientRole.findMany({
            where: { isActive: true },
            select: { id: true, roleName: true },
            orderBy: { roleName: 'asc' },
        });
        return rows;
    }
    async findAllClientRolesWithPermissions() {
        const rows = await this.prisma.clientRole.findMany({
            where: { isActive: true },
            select: { id: true, roleName: true, permissionsJson: true, isActive: true },
            orderBy: { roleName: 'asc' },
        });
        return rows.map((row) => ({
            ...row,
            permissionsJson: { permissions: (0, client_permissions_util_1.normalizePermissionsForCatalog)(row.permissionsJson) },
        }));
    }
    async createClientRole(dto) {
        const trimmedName = dto.roleName.trim();
        const existing = await this.prisma.clientRole.findFirst({
            where: { roleName: { equals: trimmedName, mode: 'insensitive' } },
        });
        if (existing)
            throw new common_1.ConflictException('Role name already exists');
        const normalizedPermissions = (0, client_permissions_util_1.validatePermissionsAgainstCatalog)(dto.permissions);
        const created = await this.prisma.clientRole.create({
            data: {
                roleName: trimmedName,
                permissionsJson: { permissions: normalizedPermissions },
                isActive: true,
            },
            select: { id: true, roleName: true, permissionsJson: true, isActive: true },
        });
        return created;
    }
    async backfillClientRolePermissions() {
        const roles = await this.prisma.clientRole.findMany({
            select: { id: true, permissionsJson: true },
        });
        let updatedCount = 0;
        for (const role of roles) {
            const normalized = (0, client_permissions_util_1.normalizePermissionsForCatalog)(role.permissionsJson);
            const current = JSON.stringify({ permissions: (0, client_permissions_util_1.parsePermissionList)(role.permissionsJson) });
            const next = JSON.stringify({ permissions: normalized });
            if (current === next)
                continue;
            await this.prisma.clientRole.update({
                where: { id: role.id },
                data: { permissionsJson: { permissions: normalized } },
            });
            updatedCount += 1;
        }
        return { updatedCount };
    }
    async updateClientRole(roleId, dto) {
        const existing = await this.prisma.clientRole.findUnique({ where: { id: roleId } });
        if (!existing)
            throw new common_1.NotFoundException('Role not found');
        const data = {};
        if (dto.roleName !== undefined)
            data.roleName = dto.roleName.trim();
        if (dto.permissions !== undefined) {
            data.permissionsJson = { permissions: (0, client_permissions_util_1.validatePermissionsAgainstCatalog)(dto.permissions) };
        }
        if (dto.isActive !== undefined)
            data.isActive = dto.isActive;
        const updated = await this.prisma.clientRole.update({
            where: { id: roleId },
            data,
            select: { id: true, roleName: true, permissionsJson: true, isActive: true },
        });
        return updated;
    }
    async findMany(filter) {
        try {
            const where = {};
            if (filter?.isActive !== undefined)
                where.isActive = filter.isActive;
            if (filter?.status !== undefined)
                where.status = filter.status;
            const db = this.prisma;
            return await db.client.findMany({
                where,
                orderBy: { code: 'asc' },
                select: {
                    id: true,
                    code: true,
                    name: true,
                    contactEmail: true,
                    contactPhone: true,
                    addressLine1: true,
                    city: true,
                    stateRegion: true,
                    postalCode: true,
                    countryCode: true,
                    currency: true,
                    status: true,
                    isActive: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
        }
        catch (e) {
            console.error('[ClientsService] findMany failed:', e);
            return [];
        }
    }
    async findOne(id) {
        const db = this.prisma;
        const client = await db.client.findUnique({
            where: { id },
            select: {
                id: true,
                code: true,
                name: true,
                contactEmail: true,
                contactPhone: true,
                addressLine1: true,
                city: true,
                stateRegion: true,
                postalCode: true,
                countryCode: true,
                currency: true,
                status: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!client)
            throw new common_1.NotFoundException('Client not found');
        return client;
    }
    async findAccounts(clientId) {
        await this.findOne(clientId);
        const rows = await this.prisma.clientAccount.findMany({
            where: { clientId },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                isActive: true,
                clientRoleId: true,
                createdAt: true,
                clientRole: { select: { id: true, roleName: true } },
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
<<<<<<< HEAD
=======
    async ensureClientExists(clientId) {
        const exists = await this.prisma.client.findUnique({
            where: { id: clientId },
            select: { id: true },
        });
        if (!exists)
            throw new common_1.NotFoundException('Client not found');
    }
    async ensureActiveClientRole(roleId) {
        const role = await this.prisma.clientRole.findFirst({
            where: { id: roleId, isActive: true },
            select: { id: true, roleName: true },
        });
        if (!role)
            throw new common_1.NotFoundException('Role not found');
        return role;
    }
    async getClientAccountOrThrow(clientId, accountId) {
        const account = await this.prisma.clientAccount.findFirst({
            where: { id: accountId, clientId },
            select: { id: true, email: true },
        });
        if (!account)
            throw new common_1.NotFoundException('Account not found');
        return account;
    }
    async createAccount(clientId, dto) {
        await this.ensureClientExists(clientId);
        await this.ensureActiveClientRole(dto.clientRoleId);
        const email = dto.email.trim().toLowerCase();
        const existing = await this.prisma.clientAccount.findUnique({ where: { email } });
        if (existing)
            throw new common_1.ConflictException('An account with this email already exists');
        const temporaryPassword = (0, crypto_1.randomBytes)(12).toString('base64url');
        const passwordHash = await bcrypt.hash(temporaryPassword, 10);
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
            temporaryPassword,
        };
    }
    async updateAccount(clientId, accountId, dto) {
        await this.ensureClientExists(clientId);
        const existing = await this.getClientAccountOrThrow(clientId, accountId);
        const data = {};
        if (dto.firstName !== undefined)
            data.firstName = dto.firstName.trim();
        if (dto.lastName !== undefined)
            data.lastName = dto.lastName.trim();
        if (dto.email !== undefined) {
            const email = dto.email.trim().toLowerCase();
            if (email !== existing.email) {
                const taken = await this.prisma.clientAccount.findUnique({ where: { email } });
                if (taken)
                    throw new common_1.ConflictException('Email already in use');
            }
            data.email = email;
        }
        if (dto.clientRoleId !== undefined) {
            await this.ensureActiveClientRole(dto.clientRoleId);
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
    async setAccountActive(clientId, accountId, isActive) {
        await this.ensureClientExists(clientId);
        await this.getClientAccountOrThrow(clientId, accountId);
        await this.prisma.clientAccount.update({
            where: { id: accountId },
            data: { isActive },
        });
        return { id: accountId, isActive };
    }
    async onboard(dto) {
        const created = await this.create(dto);
        const client = created;
        const accounts = Array.isArray(dto.accounts) ? dto.accounts : [];
        const createdAccounts = [];
        for (const account of accounts) {
            const createdAccount = await this.createAccount(client.id, account);
            createdAccounts.push({
                id: createdAccount.account.id,
                firstName: createdAccount.account.firstName,
                lastName: createdAccount.account.lastName,
                email: createdAccount.account.email,
                roleName: createdAccount.account.roleName,
                temporaryPassword: createdAccount.temporaryPassword,
            });
        }
        return {
            client: created,
            accounts: createdAccounts,
        };
    }
>>>>>>> d5f264cd6ecebd7ca41983abd6a16dca8a8da1cd
    async update(id, dto) {
        await this.findOne(id);
        const db = this.prisma;
        const select = {
            id: true,
            code: true,
            name: true,
            contactEmail: true,
            contactPhone: true,
            addressLine1: true,
            city: true,
            stateRegion: true,
            postalCode: true,
            countryCode: true,
            currency: true,
            status: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
        };
        return db.client.update({
            where: { id },
            data: {
                ...(dto.code !== undefined && { code: dto.code.trim() }),
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.contactEmail !== undefined && {
                    contactEmail: dto.contactEmail?.trim(),
                }),
                ...(dto.contactPhone !== undefined && {
                    contactPhone: dto.contactPhone?.trim(),
                }),
                ...(dto.addressLine1 !== undefined && {
                    addressLine1: dto.addressLine1?.trim(),
                }),
                ...(dto.city !== undefined && { city: dto.city?.trim() }),
                ...(dto.stateRegion !== undefined && {
                    stateRegion: dto.stateRegion?.trim(),
                }),
                ...(dto.postalCode !== undefined && {
                    postalCode: dto.postalCode?.trim(),
                }),
                ...(dto.countryCode !== undefined && {
                    countryCode: dto.countryCode?.trim(),
                }),
                ...(dto.status !== undefined && {
                    status: dto.status,
                }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
                ...(dto.currency !== undefined && { currency: dto.currency }),
            },
            select,
        });
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        actors_service_1.ActorsService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map