import { apiFetch, type ApiError } from '@/lib/api';

const BASE = '/inventory/client-portal/current-stock';

export interface ClientPortalCurrentStockRow {
  id: string;
  quantity: string | number;
  updatedAt: string;
  warehouse?: { code: string; name: string } | null;
  location?: { code: string } | null;
  batch?: { batchCode: string } | null;
  product?: {
    id: string;
    sku: string;
    name: string;
    defaultUom?: { code: string } | null;
  } | null;
}

export interface FetchClientPortalStockParams {
  dateFrom?: string;
  dateTo?: string;
}

function buildQuery(params: FetchClientPortalStockParams): string {
  const sp = new URLSearchParams();
  if (params.dateFrom) sp.set('dateFrom', params.dateFrom);
  if (params.dateTo) sp.set('dateTo', params.dateTo);
  const q = sp.toString();
  return q ? `${BASE}?${q}` : BASE;
}

export async function fetchClientPortalCurrentStock(
  params: FetchClientPortalStockParams = {},
): Promise<ClientPortalCurrentStockRow[]> {
  return apiFetch<ClientPortalCurrentStockRow[]>(buildQuery(params));
}

export function getInventoryErrorMessage(err: unknown): string {
  const apiErr = err as ApiError;
  if (apiErr?.status === 401) {
    return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  }
  if (apiErr?.status === 403) {
    return 'غير مصرح لك بالوصول إلى مخزون هذا الحساب.';
  }
  return 'تعذر تحميل المخزون. يرجى المحاولة مرة أخرى.';
}

export function mapStockToTableRow(row: ClientPortalCurrentStockRow) {
  const qty =
    typeof row.quantity === 'string' ? Number(row.quantity) : Number(row.quantity ?? 0);
  const wh = row.warehouse?.name || row.warehouse?.code || '';
  const loc = row.location?.code || '';
  const batch = row.batch?.batchCode || '';
  const detailParts = [wh && `مستودع: ${wh}`, loc && `موقع: ${loc}`, batch && `دفعة: ${batch}`].filter(
    Boolean,
  );
  return {
    id: row.id,
    productName: row.product?.name || '—',
    productCode: row.product?.sku || '—',
    uom: row.product?.defaultUom?.code || '—',
    currentQuantity: qty,
    lastMovementDate: row.updatedAt
      ? new Date(row.updatedAt).toLocaleString('ar-SA')
      : '—',
    notes: detailParts.length > 0 ? detailParts.join(' · ') : '',
  };
}
