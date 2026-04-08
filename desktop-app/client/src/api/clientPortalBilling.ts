import { apiFetch, type ApiError } from '@/lib/api';

export interface ClientPortalBillingOverview {
  currentPlan: {
    planName: string;
    renewalDate: string;
    status: string;
    billingCycle: string | null;
  };
  usage: {
    space: {
      usedPercent: number;
      usedUnits: number;
      totalUnits: number;
      estimatedCostUsd: number;
    };
    incomingMovements: { count: number; estimatedCostUsd: number };
    outgoingOrders: { count: number; estimatedCostUsd: number };
  };
  totalEstimatedUsd: number;
  currency: string;
  periodStart: string;
  periodEnd: string;
}

export async function fetchClientPortalBillingOverview(): Promise<ClientPortalBillingOverview> {
  return apiFetch<ClientPortalBillingOverview>('/billing/client-portal/overview');
}

export function getBillingErrorMessage(err: unknown): string {
  const e = err as ApiError;
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) return 'غير مصرح لك بالوصول.';
  return 'تعذر تحميل بيانات الفوترة. يرجى المحاولة لاحقاً.';
}
