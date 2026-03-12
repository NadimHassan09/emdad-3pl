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
const client_1 = require("@prisma/client");
let ClientsService = class ClientsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findClientAccountByEmail(email) {
        const account = await this.prisma.clientAccount.findFirst({
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
        if (!account.client.isActive ||
            account.client.status !== client_1.ClientStatus.ACTIVE) {
            throw new common_1.UnauthorizedException('Client account is not active');
        }
        if (!account.passwordHash)
            throw new common_1.UnauthorizedException('Invalid email or password');
        const valid = await bcrypt.compare(password, account.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('Invalid email or password');
        return account;
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientsService);
//# sourceMappingURL=clients.service.js.map