import { apiFetch } from '@/lib/api';

const IN_LIST = '/inbound-orders/client-portal';
const IN_DETAIL = '/inbound-orders/client-portal/detail';
const IN_CREATE = '/inbound-orders/client-portal';
const OUT_LIST = '/outbound-orders/client-portal';
const OUT_DETAIL = '/outbound-orders/client-portal/detail';
const OUT_CREATE = '/outbound-orders/client-portal';
const WH_LIST = '/warehouses/client-portal/list';
const PR_LIST = '/products/client-portal/list';

export interface PortalWarehouse {
  id: string;
  code: string;
  name: string;
}

export interface PortalProduct {
  id: string;
  sku: string;
  name: string;
  defaultUom?: { id: string; code: string; name: string };
}

export async function fetchClientPortalWarehouses(): Promise<PortalWarehouse[]> {
  return apiFetch<PortalWarehouse[]>(WH_LIST);
}

export async function fetchClientPortalProducts(): Promise<PortalProduct[]> {
  return apiFetch<PortalProduct[]>(PR_LIST);
}

export interface OrderListParams {
  expectedDateFrom?: string;
  expectedDateTo?: string;
  expectedShipDateFrom?: string;
  expectedShipDateTo?: string;
}

function qs(params: Record<string, string | undefined>): string {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v) sp.set(k, v);
  });
  const q = sp.toString();
  return q ? `?${q}` : '';
}

export async function fetchClientPortalInboundList(
  p: Pick<OrderListParams, 'expectedDateFrom' | 'expectedDateTo'> = {},
) {
  return apiFetch<unknown[]>(
    `${IN_LIST}${qs({
      expectedDateFrom: p.expectedDateFrom,
      expectedDateTo: p.expectedDateTo,
    })}`,
  );
}

export async function fetchClientPortalOutboundList(
  p: Pick<OrderListParams, 'expectedShipDateFrom' | 'expectedShipDateTo'> = {},
) {
  return apiFetch<unknown[]>(
    `${OUT_LIST}${qs({
      expectedShipDateFrom: p.expectedShipDateFrom,
      expectedShipDateTo: p.expectedShipDateTo,
    })}`,
  );
}

export async function fetchInboundOrderDetail(ref: string) {
  return apiFetch<unknown>(
    `${IN_DETAIL}?ref=${encodeURIComponent(ref)}`,
  );
}

export async function fetchOutboundOrderDetail(ref: string) {
  return apiFetch<unknown>(
    `${OUT_DETAIL}?ref=${encodeURIComponent(ref)}`,
  );
}

export async function createInboundPortal(body: {
  expectedDate?: string;
}) {
  return apiFetch<unknown>(IN_CREATE, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function createOutboundPortal(body: {
  expectedShipDate?: string;
}) {
  return apiFetch<unknown>(OUT_CREATE, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function addInboundPortalItem(
  orderId: string,
  body: { productId: string; qtyOrdered: number; uomId: string },
) {
  return apiFetch<unknown>(`${IN_CREATE}/${orderId}/items`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function addOutboundPortalItem(
  orderId: string,
  body: { productId: string; qtyOrdered: number; uomId: string },
) {
  return apiFetch<unknown>(`${OUT_CREATE}/${orderId}/items`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}
