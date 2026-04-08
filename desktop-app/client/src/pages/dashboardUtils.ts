import type { ClientPortalDashboardMovementMonth } from '@/api/clientPortalDashboard';

const CHART_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export function assignStockColors(
  items: { name: string; value: number }[],
): { name: string; value: number; color: string }[] {
  return items.map((item, index) => ({
    ...item,
    color: CHART_COLORS[index % CHART_COLORS.length],
  }));
}

/**
 * Month-over-month change in total movement volume (inbound + outbound) for the badge.
 */
export function computeMovementMonthOverMonthPercent(
  movementByMonth: ClientPortalDashboardMovementMonth[],
): { percent: number; label: string } | null {
  if (movementByMonth.length < 2) return null;
  const last = movementByMonth[movementByMonth.length - 1];
  const prev = movementByMonth[movementByMonth.length - 2];
  const lastTotal = last.inbound + last.outbound;
  const prevTotal = prev.inbound + prev.outbound;
  if (prevTotal === 0 && lastTotal === 0) return null;
  if (prevTotal === 0) {
    return { percent: 100, label: '+100% هذا الشهر' };
  }
  const pct = ((lastTotal - prevTotal) / prevTotal) * 100;
  const rounded = Math.round(pct * 10) / 10;
  const sign = rounded >= 0 ? '+' : '';
  return {
    percent: rounded,
    label: `${sign}${rounded}% هذا الشهر`,
  };
}
