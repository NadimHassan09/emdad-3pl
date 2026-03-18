import { apiFetch } from './api';

export interface OverviewSummary {
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
  /** طلبات واردة غير مكتملة/ملغاة */
  openInboundOrdersCount?: number;
  /** طلبات صادرة غير مكتملة/ملغاة */
  openOutboundOrdersCount?: number;
  locationsOccupiedPercent?: number;
  locationsWithStock?: number;
  locationsTotal?: number;
}

export interface SalesByMonth {
  month: string;
  /** إجمالي كميات الطلبات الصادرة (وحدات) */
  sales: number;
  orders: number;
}

export interface InventoryByMonth {
  month: string;
  total: number;
  used: number;
  available: number;
}

export interface ActivityLogEntry {
  timestamp: string;
  user: string;
  action: string;
  resourceType: string;
  resourceId: string;
}

export interface OverviewResponse {
  summary: OverviewSummary;
  salesByMonth: SalesByMonth[];
  inventoryByMonth: InventoryByMonth[];
  activityLog: ActivityLogEntry[];
}

export async function fetchOverview(): Promise<OverviewResponse> {
  return apiFetch<OverviewResponse>('/dashboard/overview');
}
