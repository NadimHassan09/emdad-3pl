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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
const client_1 = require("@prisma/client");
const library_1 = require("@prisma/client/runtime/library");
let DashboardService = class DashboardService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    toNumber(value) {
        if (typeof value === 'number')
            return value;
        if (value && typeof value === 'object' && 'toNumber' in value) {
            return value.toNumber();
        }
        if (value instanceof library_1.Decimal)
            return value.toNumber();
        return Number(value) || 0;
    }
    async getOverview() {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const sixMonthsAgo = new Date(now);
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
        sixMonthsAgo.setDate(1);
        sixMonthsAgo.setHours(0, 0, 0, 0);
        let clientsCount = 0;
        let clientsCountLastMonth = 0;
        let warehousesCount = 0;
        let activeUsersCount = 0;
        let openApprovalsCount = 0;
        let pendingApprovalsCreatedLast24h = 0;
        let warehousesWithCapacity = [];
        let currentStockAgg = [];
        let ledgerLastWeek = [];
        let outboundByMonth = [];
        let ledgerByMonth = [];
        try {
            [
                clientsCount,
                clientsCountLastMonth,
                warehousesCount,
                activeUsersCount,
                openApprovalsCount,
                pendingApprovalsCreatedLast24h,
                warehousesWithCapacity,
                currentStockAgg,
                ledgerLastWeek,
                outboundByMonth,
                ledgerByMonth,
            ] = await Promise.all([
                this.prisma.client.count({ where: { isActive: true } }),
                this.prisma.client.count({
                    where: { isActive: true, createdAt: { lt: startOfMonth } },
                }),
                this.prisma.warehouse.count({ where: { isActive: true } }),
                this.prisma.user.count({ where: { isActive: true } }),
                this.prisma.approval.count({ where: { status: client_1.ApprovalStatus.PENDING } }),
                this.prisma.approval.count({
                    where: {
                        status: client_1.ApprovalStatus.PENDING,
                        createdAt: { gte: new Date(now.getTime() - 24 * 60 * 60 * 1000) },
                    },
                }),
                this.prisma.warehouse.findMany({
                    where: { isActive: true, capacityValue: { not: null } },
                    select: { capacityValue: true },
                }),
                this.prisma.currentStock.groupBy({
                    by: ['productId'],
                    _sum: { quantity: true },
                    _count: { productId: true },
                }),
                this.prisma.inventoryLedger.findMany({
                    where: { createdAt: { gte: oneWeekAgo } },
                    select: { productId: true, qtyChange: true },
                }),
                this.prisma.outboundOrder.findMany({
                    where: { createdAt: { gte: sixMonthsAgo } },
                    select: { createdAt: true },
                }),
                this.prisma.inventoryLedger.findMany({
                    where: { createdAt: { gte: sixMonthsAgo } },
                    select: { qtyChange: true, createdAt: true },
                }),
            ]);
        }
        catch (e) {
            console.error('[DashboardService] getOverview queries failed:', e);
        }
        let auditLogs = [];
        try {
            auditLogs = (await this.prisma.auditLog.findMany({
                take: 20,
                orderBy: { createdAt: 'desc' },
                include: {
                    actor: {
                        include: {
                            user: { select: { email: true } },
                            clientAccount: { select: { email: true } },
                        },
                    },
                },
            }));
        }
        catch {
        }
        const clientsCountChangeThisMonth = clientsCount - clientsCountLastMonth;
        let capacityTotal = 0;
        let capacityUsed = 0;
        for (const w of warehousesWithCapacity) {
            const cap = this.toNumber(w.capacityValue);
            capacityTotal += cap;
        }
        const capacityUsedPercent = capacityTotal > 0 ? Math.round((capacityUsed / capacityTotal) * 100) : 0;
        const totalProductsStored = currentStockAgg.length;
        let totalQuantity = 0;
        for (const g of currentStockAgg) {
            totalQuantity += this.toNumber(g._sum?.quantity);
        }
        let productsChangeThisWeek = 0;
        for (const e of ledgerLastWeek) {
            productsChangeThisWeek += this.toNumber(e.qtyChange);
        }
        const monthKeys = [];
        const monthLabels = [];
        for (let i = 5; i >= 0; i--) {
            const d = new Date(now);
            d.setMonth(d.getMonth() - i);
            d.setDate(1);
            d.setHours(0, 0, 0, 0);
            monthKeys.push(`${d.getFullYear()}-${d.getMonth() + 1}`);
            monthLabels.push(d.toLocaleDateString('ar-SA', { month: 'short', year: 'numeric' }));
        }
        const salesByMonth = monthKeys.map((key, idx) => {
            const orders = outboundByMonth.filter((o) => {
                const d = new Date(o.createdAt);
                const k = `${d.getFullYear()}-${d.getMonth() + 1}`;
                return k === key;
            }).length;
            return {
                month: monthLabels[idx],
                sales: orders * 1000,
                orders,
            };
        });
        const inventoryByMonth = monthKeys.map((key, idx) => {
            let used = 0;
            let available = 0;
            for (const e of ledgerByMonth) {
                const d = new Date(e.createdAt);
                const k = `${d.getFullYear()}-${d.getMonth() + 1}`;
                if (k !== key)
                    continue;
                const q = this.toNumber(e.qtyChange);
                if (q >= 0)
                    used += q;
                else
                    available += Math.abs(q);
            }
            const total = used + available;
            return {
                month: monthLabels[idx],
                total,
                used,
                available,
            };
        });
        const activityLog = auditLogs.map((log) => {
            const actor = log.actor;
            const email = actor?.user?.email ?? actor?.clientAccount?.email ?? '—';
            const createdAt = log.createdAt;
            const ts = typeof createdAt === 'string'
                ? createdAt
                : new Date(createdAt).toISOString().replace('T', ' ').slice(0, 16);
            const resourceId = log.resourceId != null ? String(log.resourceId) : '—';
            return {
                timestamp: ts,
                user: email,
                action: log.action,
                resourceType: log.resourceType,
                resourceId,
            };
        });
        return {
            summary: {
                clientsCount,
                clientsCountChangeThisMonth,
                warehousesCount,
                activeUsersCount,
                openApprovalsCount,
                urgentApprovalsCount: pendingApprovalsCreatedLast24h,
                capacityUsedPercent,
                capacityUsedM3: Math.round(capacityUsed),
                capacityTotalM3: Math.round(capacityTotal),
                totalProductsStored,
                totalQuantity,
                productsInUseCount: totalProductsStored,
                productsStoredCount: totalQuantity,
                productsChangeThisWeek,
            },
            salesByMonth,
            inventoryByMonth,
            activityLog,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map