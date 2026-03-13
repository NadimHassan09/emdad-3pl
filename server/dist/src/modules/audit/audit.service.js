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
exports.AuditService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let AuditService = class AuditService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async log(input) {
        const db = this.prisma;
        return db.auditLog.create({
            data: {
                actorId: input.actorId ?? null,
                action: input.action,
                resourceType: input.resourceType,
                resourceId: input.resourceId ?? null,
                ipAddress: input.ipAddress ?? null,
                detailsJson: input.detailsJson ?? {},
            },
        });
    }
    async findMany(filter) {
        const db = this.prisma;
        const where = {};
        if (filter?.actorId)
            where.actorId = filter.actorId;
        if (filter?.resourceType)
            where.resourceType = filter.resourceType;
        if (filter?.resourceId)
            where.resourceId = filter.resourceId;
        if (filter?.action)
            where.action = filter.action;
        if (filter?.dateFrom || filter?.dateTo) {
            where.createdAt = {};
            if (filter.dateFrom)
                where.createdAt.gte = new Date(filter.dateFrom);
            if (filter.dateTo)
                where.createdAt.lte = new Date(filter.dateTo);
        }
        return db.auditLog.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const db = this.prisma;
        const entry = await db.auditLog.findUnique({ where: { id } });
        if (!entry)
            throw new common_1.NotFoundException('Audit log not found');
        return entry;
    }
};
exports.AuditService = AuditService;
exports.AuditService = AuditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuditService);
//# sourceMappingURL=audit.service.js.map