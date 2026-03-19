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
exports.ClientPortalNotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
function toApi(n) {
    const msg = n.message || '';
    return {
        id: n.id,
        clientId: n.clientId,
        createdAt: n.createdAt.toISOString(),
        importance: n.importance || 'MEDIUM',
        title: n.title,
        messagePreview: msg.length > 80 ? msg.slice(0, 80) + '...' : msg,
        fullMessage: msg,
        referenceType: n.referenceType || '',
        referenceId: n.referenceId || '',
        readStatus: n.isRead ? 'READ' : 'UNREAD',
    };
}
let ClientPortalNotificationsService = class ClientPortalNotificationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listForActor(actor, query) {
        const clientId = actor.clientId;
        const where = { clientId };
        if (query?.importance)
            where.importance = query.importance;
        if (query?.readStatus)
            where.isRead = query.readStatus === 'READ';
        if (query?.referenceType)
            where.referenceType = query.referenceType;
        if (query?.dateFrom) {
            where.createdAt = { ...where.createdAt, gte: new Date(query.dateFrom) };
        }
        if (query?.dateTo) {
            const to = new Date(query.dateTo);
            to.setHours(23, 59, 59, 999);
            where.createdAt = { ...where.createdAt, lte: to };
        }
        const rows = await this.prisma.clientNotification.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
        return rows.map(toApi);
    }
    async findUnreadForActor(actor, limit = 5) {
        const clientId = actor.clientId;
        const rows = await this.prisma.clientNotification.findMany({
            where: { clientId, isRead: false },
            orderBy: { createdAt: 'desc' },
            take: Math.min(limit, 20),
        });
        return rows.map(toApi);
    }
    async markAllReadForActor(actor) {
        const clientId = actor.clientId;
        const result = await this.prisma.clientNotification.updateMany({
            where: { clientId, isRead: false },
            data: { isRead: true },
        });
        return { count: result.count };
    }
    async markRead(actor, id) {
        const clientId = actor.clientId;
        const n = await this.prisma.clientNotification.findFirst({
            where: { id, clientId },
        });
        if (!n)
            return { id, readStatus: 'READ' };
        await this.prisma.clientNotification.update({
            where: { id },
            data: { isRead: true },
        });
        return { id, readStatus: 'READ' };
    }
    async deleteForActor(actor, id) {
        const clientId = actor.clientId;
        const n = await this.prisma.clientNotification.findFirst({
            where: { id, clientId },
        });
        if (!n)
            return { success: false };
        await this.prisma.clientNotification.delete({ where: { id } });
        return { success: true };
    }
};
exports.ClientPortalNotificationsService = ClientPortalNotificationsService;
exports.ClientPortalNotificationsService = ClientPortalNotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientPortalNotificationsService);
//# sourceMappingURL=client-portal-notifications.service.js.map