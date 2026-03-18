import { apiFetch, type ApiError } from '@/lib/api';

const CLIENT_PORTAL_DASHBOARD_PATH = '/inventory/client-portal/dashboard';

export interface ClientPortalDashboardStats {
  totalProducts: number;
  totalStock: number;
  incomingOrders: number;
  outgoingOrders: number;
  recentMovements: number;
}

export interface ClientPortalDashboardMovementMonth {
  name: string;
  inbound: number;
  outbound: number;
}

export interface ClientPortalDashboardRecentMovement {
  date: string;
  movementType: string;
  sku: string;
  qtyChange: number;
  referenceId: string | null;
}

export interface ClientPortalDashboardResponse {
  stats: ClientPortalDashboardStats;
  movementByMonth: ClientPortalDashboardMovementMonth[];
  stockDistribution: { name: string; value: number }[];
  weeklyTrend: { name: string; value: number }[];
  recentMovements: ClientPortalDashboardRecentMovement[];
}

export async function fetchClientPortalDashboard(): Promise<ClientPortalDashboardResponse> {
  return apiFetch<ClientPortalDashboardResponse>(CLIENT_PORTAL_DASHBOARD_PATH);
}

export function getDashboardErrorMessage(err: unknown): string {
  const apiErr = err as ApiError;
  if (apiErr?.status === 401) {
    return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  }
  if (apiErr?.status === 403) {
    return 'غير مصرح لك بالوصول إلى هذه البيانات.';
  }
  if (apiErr?.status === 404) {
    return 'تعذر العثور على بيانات لوحة التحكم.';
  }
  return 'تعذر تحميل بيانات لوحة التحكم. يرجى المحاولة لاحقاً.';
}
