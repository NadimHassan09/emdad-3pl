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
exports.ActorsService = void 0;
const common_1 = require("@nestjs/common");
const actor_type_enum_1 = require("../../common/enums/actor-type.enum");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let ActorsService = class ActorsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByUserId(userId) {
        return this.prisma.actor.findUnique({
            where: { userId },
            include: { user: true },
        });
    }
    async findByClientAccountId(clientAccountId) {
        return this.prisma.actor.findUnique({
            where: { clientAccountId },
            include: { clientAccount: true },
        });
    }
    async getOrCreateForUser(userId) {
        const existing = await this.prisma.actor.findUnique({ where: { userId } });
        if (existing)
            return existing;
        return this.prisma.actor.create({
            data: {
                actorType: actor_type_enum_1.ActorType.INTERNAL_USER,
                userId,
            },
        });
    }
    async getOrCreateForClientAccount(clientAccountId) {
        const existing = await this.prisma.actor.findUnique({
            where: { clientAccountId },
        });
        if (existing)
            return existing;
        return this.prisma.actor.create({
            data: {
                actorType: actor_type_enum_1.ActorType.CLIENT_ACCOUNT,
                clientAccountId,
            },
        });
    }
};
exports.ActorsService = ActorsService;
exports.ActorsService = ActorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActorsService);
//# sourceMappingURL=actors.service.js.map