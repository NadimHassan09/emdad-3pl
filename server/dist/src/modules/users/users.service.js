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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllRoles() {
        try {
            return await this.prisma.userRole.findMany({
                where: { isActive: true },
                select: { id: true, roleName: true },
                orderBy: { roleName: 'asc' },
            });
        }
        catch (e) {
            console.error('[UsersService] findAllRoles failed:', e);
            return [];
        }
    }
    async findAllRolesWithPermissions() {
        try {
            const rows = await this.prisma.userRole.findMany({
                where: { isActive: true },
                select: { id: true, roleName: true, permissionsJson: true },
                orderBy: { roleName: 'asc' },
            });
            return rows;
        }
        catch (e) {
            console.error('[UsersService] findAllRolesWithPermissions failed:', e);
            return [];
        }
    }
    async findRoleById(id) {
        const role = await this.prisma.userRole.findUnique({
            where: { id, isActive: true },
            select: { id: true, roleName: true, permissionsJson: true },
        });
        if (!role)
            throw new common_1.NotFoundException('Role not found');
        return role;
    }
    async createRole(dto) {
        const trimmedName = dto.roleName.trim();
        const existing = await this.prisma.userRole.findFirst({
            where: { roleName: { equals: trimmedName, mode: 'insensitive' } },
        });
        if (existing)
            throw new common_1.ConflictException('Role name already exists');
        const permissionsJson = { permissions: Array.isArray(dto.permissions) ? dto.permissions : [] };
        const role = await this.prisma.userRole.create({
            data: {
                roleName: trimmedName,
                permissionsJson,
            },
            select: { id: true, roleName: true, permissionsJson: true },
        });
        return role;
    }
    async updateRole(id, dto) {
        const existing = await this.prisma.userRole.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Role not found');
        const data = {};
        if (dto.roleName !== undefined)
            data.roleName = dto.roleName.trim();
        if (dto.permissions !== undefined)
            data.permissionsJson = { permissions: dto.permissions };
        const role = await this.prisma.userRole.update({
            where: { id },
            data,
            select: { id: true, roleName: true, permissionsJson: true },
        });
        return role;
    }
    async findMany() {
        try {
            const users = await this.prisma.user.findMany({
                include: {
                    internalRole: {
                        select: { id: true, roleName: true, permissionsJson: true },
                    },
                    warehouse: {
                        select: { id: true, code: true, name: true },
                    },
                },
                orderBy: { createdAt: 'desc' },
            });
            return users;
        }
        catch (e) {
            console.error('[UsersService] findMany failed:', e);
            return [];
        }
    }
    async update(id, dto) {
        const existing = await this.prisma.user.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('User not found');
        if (dto.email !== undefined && dto.email !== existing.email) {
            const taken = await this.prisma.user.findUnique({
                where: { email: dto.email.trim().toLowerCase() },
            });
            if (taken)
                throw new common_1.ConflictException('Email already in use');
        }
        const data = {};
        if (dto.firstName !== undefined)
            data.firstName = dto.firstName.trim();
        if (dto.lastName !== undefined)
            data.lastName = dto.lastName.trim();
        if (dto.email !== undefined)
            data.email = dto.email.trim().toLowerCase();
        if (dto.internalRoleId !== undefined)
            data.internalRoleId = dto.internalRoleId;
        if (dto.warehouseId !== undefined)
            data.warehouseId = dto.warehouseId;
        if (dto.isActive !== undefined)
            data.isActive = dto.isActive;
        if (dto.password !== undefined && dto.password.length > 0) {
            data.passwordHash = await bcrypt.hash(dto.password, 10);
        }
        const user = await this.prisma.user.update({
            where: { id },
            data,
            include: {
                internalRole: {
                    select: { id: true, roleName: true, permissionsJson: true },
                },
                warehouse: {
                    select: { id: true, code: true, name: true },
                },
            },
        });
        return user;
    }
    async findUserByEmail(email) {
        const user = await this.prisma.user.findFirst({
            where: { email: email.trim().toLowerCase(), isActive: true },
            include: {
                internalRole: {
                    select: { id: true, roleName: true, permissionsJson: true },
                },
                warehouse: {
                    select: { id: true, code: true, name: true },
                },
            },
        });
        return user;
    }
    async validateUserCredentials(email, password) {
        const user = await this.findUserByEmail(email);
        if (!user)
            throw new common_1.UnauthorizedException('Invalid email or password');
        if (!user.passwordHash)
            throw new common_1.UnauthorizedException('Invalid email or password');
        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('Invalid email or password');
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map