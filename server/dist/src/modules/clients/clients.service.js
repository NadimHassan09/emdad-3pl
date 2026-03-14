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
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let ClientsService = class ClientsService {
    constructor(prisma) {
        this.prisma = prisma;
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map