import { apiFetch } from '@/lib/api';

const LEDGER = '/inventory/client-portal/ledger';

export interface LedgerEntry {
  id: string;
  createdAt: string;
  movementType: string;
  qtyChange: number;
  referenceId?: string | null;
  referenceType?: string | null;
  product?: { id: string; sku: string; name: string } | null;
  warehouse?: { id: string; code: string; name: string } | null;
  location?: { id: string; code: string } | null;
  batch?: { id: string; batchCode: string } | null;
  createdByActorId?: string | null;
}

export interface LedgerFilterParams {
  dateFrom?: string;
  dateTo?: string;
  movementType?: string;
  warehouseId?: string;
  productId?: string;
}

function buildQueryString(params: LedgerFilterParams): string {
  const sp = new URLSearchParams();
  if (params.dateFrom) sp.set('dateFrom', params.dateFrom);
  if (params.dateTo) sp.set('dateTo', params.dateTo);
  if (params.movementType) sp.set('movementType', params.movementType);
  if (params.warehouseId) sp.set('warehouseId', params.warehouseId);
  if (params.productId) sp.set('productId', params.productId);
  const q = sp.toString();
  return q ? `?${q}` : '';
}

export async function fetchClientPortalLedger(
  params: LedgerFilterParams = {},
): Promise<LedgerEntry[]> {
  const url = `${LEDGER}${buildQueryString(params)}`;
  const data = await apiFetch<LedgerEntry[]>(url);
  return Array.isArray(data) ? data : [];
}
