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
        if (typeof value === 'number' && !Number.isNaN(value))
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
        let ledgerByMonth = [];
        let outboundForSales = [];
        let activeProductsCount = 0;
        let locationsTotal = 0;
        let locationsWithStock = 0;
        let openInboundOrders = 0;
        let openOutboundOrders = 0;
        try {
            const stockLocs = await this.prisma.currentStock.findMany({
                where: {
                    quantity: { gt: 0 },
                    locationId: { not: null },
                },
                select: { locationId: true },
                distinct: ['locationId'],
            });
            locationsWithStock = stockLocs.filter((r) => r.locationId).length;
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
                outboundForSales,
                ledgerByMonth,
                activeProductsCount,
                locationsTotal,
                openInboundOrders,
                openOutboundOrders,
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
                }),
                this.prisma.inventoryLedger.findMany({
                    where: { createdAt: { gte: oneWeekAgo } },
                    select: { productId: true, qtyChange: true },
                }),
                this.prisma.outboundOrder.findMany({
                    where: { createdAt: { gte: sixMonthsAgo } },
                    select: {
                        createdAt: true,
                        items: { select: { qtyOrdered: true } },
                    },
                }),
                this.prisma.inventoryLedger.findMany({
                    where: { createdAt: { gte: sixMonthsAgo } },
                    select: { qtyChange: true, createdAt: true },
                }),
                this.prisma.product.count({ where: { isActive: true } }),
                this.prisma.location.count({ where: { isActive: true } }),
                this.prisma.inboundOrder.count({
                    where: { status: { notIn: ['COMPLETED', 'CANCELLED'] } },
                }),
                this.prisma.outboundOrder.count({
                    where: { status: { notIn: ['COMPLETED', 'CANCELLED'] } },
                }),
            ]);
        }
        catch (e) {
            console.error('[DashboardService] getOverview queries failed:', e);
        }
        let auditLogs = [];
        try {
            auditLogs = (await this.prisma.auditLog.findMany({
                take: 25,
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
        for (const w of warehousesWithCapacity) {
            capacityTotal += this.toNumber(w.capacityValue);
        }
        const capacityUsedPercent = locationsTotal > 0
            ? Math.min(100, Math.round((locationsWithStock / locationsTotal) * 100))
            : 0;
        const capacityUsedM3 = capacityTotal > 0
            ? Math.round((capacityTotal * capacityUsedPercent) / 100)
            : locationsTotal > 0
                ? locationsWithStock
                : 0;
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
            const inMonth = outboundForSales.filter((o) => {
                const d = new Date(o.createdAt);
                const k = `${d.getFullYear()}-${d.getMonth() + 1}`;
                return k === key;
            });
            const orders = inMonth.length;
            let totalQty = 0;
            for (const o of inMonth) {
                for (const it of o.items) {
                    totalQty += this.toNumber(it.qtyOrdered);
                }
            }
            return {
                month: monthLabels[idx],
                sales: Math.round(totalQty),
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
        const formatActivity = (createdAt, user, action, resourceType, resourceId) => {
            const ts = typeof createdAt === 'string'
                ? createdAt
                : new Date(createdAt).toISOString().replace('T', ' ').slice(0, 16);
            return { timestamp: ts, user, action, resourceType, resourceId };
        };
        const activityLog = auditLogs.map((log) => {
            const actor = log.actor;
            const email = actor?.user?.email ?? actor?.clientAccount?.email ?? '—';
            const resourceId = log.resourceId != null ? String(log.resourceId) : '—';
            return formatActivity(log.createdAt, email, log.action, log.resourceType, resourceId);
        });
        if (activityLog.length < 8) {
            try {
                const [recentIn, recentOut] = await Promise.all([
                    this.prisma.inboundOrder.findMany({
                        take: 8,
                        orderBy: { createdAt: 'desc' },
                        select: {
                            id: true,
                            orderNumber: true,
                            createdAt: true,
                            createdByActor: {
                                select: {
                                    user: { select: { email: true } },
                                    clientAccount: { select: { email: true } },
                                },
                            },
                        },
                    }),
                    this.prisma.outboundOrder.findMany({
                        take: 8,
                        orderBy: { createdAt: 'desc' },
                        select: {
                            id: true,
                            orderNumber: true,
                            createdAt: true,
                            createdByActor: {
                                select: {
                                    user: { select: { email: true } },
                                    clientAccount: { select: { email: true } },
                                },
                            },
                        },
                    }),
                ]);
                const synthetic = [];
                for (const o of recentIn) {
                    const u = o.createdByActor?.user?.email ??
                        o.createdByActor?.clientAccount?.email ??
                        '—';
                    synthetic.push(formatActivity(o.createdAt, u, 'إنشاء طلب وارد', 'InboundOrder', o.orderNumber ?? o.id.slice(0, 8)));
                }
                for (const o of recentOut) {
                    const u = o.createdByActor?.user?.email ??
                        o.createdByActor?.clientAccount?.email ??
                        '—';
                    synthetic.push(formatActivity(o.createdAt, u, 'إنشاء طلب صادر', 'OutboundOrder', o.orderNumber ?? o.id.slice(0, 8)));
                }
                synthetic.sort((a, b) => new Date(b.timestamp.replace(' ', 'T')).getTime() -
                    new Date(a.timestamp.replace(' ', 'T')).getTime());
                const seen = new Set(activityLog.map((a) => `${a.action}-${a.resourceId}-${a.timestamp}`));
                for (const row of synthetic) {
                    const k = `${row.action}-${row.resourceId}-${row.timestamp}`;
                    if (seen.has(k))
                        continue;
                    seen.add(k);
                    activityLog.push(row);
                    if (activityLog.length >= 25)
                        break;
                }
                activityLog.sort((a, b) => new Date(b.timestamp.replace(' ', 'T')).getTime() -
                    new Date(a.timestamp.replace(' ', 'T')).getTime());
                activityLog.splice(25);
            }
            catch {
            }
        }
        return {
            summary: {
                clientsCount,
                clientsCountChangeThisMonth,
                warehousesCount,
                activeUsersCount,
                openApprovalsCount,
                urgentApprovalsCount: pendingApprovalsCreatedLast24h,
                capacityUsedPercent,
                capacityUsedM3,
                capacityTotalM3: Math.round(capacityTotal),
                totalProductsStored,
                totalQuantity,
                productsInUseCount: activeProductsCount,
                productsStoredCount: totalProductsStored,
                productsChangeThisWeek,
                openInboundOrdersCount: openInboundOrders,
                openOutboundOrdersCount: openOutboundOrders,
                locationsOccupiedPercent: capacityUsedPercent,
                locationsWithStock,
                locationsTotal,
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