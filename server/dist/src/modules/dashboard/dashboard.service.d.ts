import { PrismaService } from '../../database/prisma/prisma.service';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private toNumber;
    getOverview(): Promise<{
        summary: {
            clientsCount: number;
            clientsCountChangeThisMonth: number;
            warehousesCount: number;
            activeUsersCount: number;
            openApprovalsCount: number;
            urgentApprovalsCount: number;
            capacityUsedPercent: number;
            capacityUsedM3: number;
            capacityTotalM3: number;
            totalProductsStored: number;
            totalQuantity: number;
            productsInUseCount: number;
            productsStoredCount: number;
            productsChangeThisWeek: number;
            openInboundOrdersCount: number;
            openOutboundOrdersCount: number;
            locationsOccupiedPercent: number;
            locationsWithStock: number;
            locationsTotal: number;
        };
        salesByMonth: {
            month: string;
            sales: number;
            orders: number;
        }[];
        inventoryByMonth: {
            month: string;
            total: number;
            used: number;
            available: number;
        }[];
        activityLog: {
            timestamp: string;
            user: string;
            action: string;
            resourceType: string;
            resourceId: string;
        }[];
    }>;
}
