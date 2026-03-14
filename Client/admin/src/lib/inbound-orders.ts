import { apiFetch } from './api';

// Backend API types
export interface InboundOrderItemApi {
  id: string;
  productId: string;
  qtyOrdered: number | string;
  qtyReceived: number | string;
  product?: { id: string; sku: string; name: string };
  uom?: { id: string; code: string; name: string };
}

export interface InboundOrderApi {
  id: string;
  clientId: string;
  warehouseId: string;
  orderNumber?: string | null;
  status: string;
  currentStage?: string | null;
  expectedDate: string | null;
  createdAt: string;
  client?: { id: string; code: string; name: string };
  warehouse?: { id: string; code: string; name: string };
  items?: InboundOrderItemApi[];
  createdByActor?: {
    user?: { email?: string };
    clientAccount?: { email?: string };
  };
}

// UI types (match App.tsx InboundOrder)
export type InboundOrderStatusUi =
  | 'جديد'
  | 'قيد المعالجة'
  | 'قيد الاستلام'
  | 'مكتمل'
  | 'ملغي';
export type ShipmentStatusUi = 'لم يبدأ' | 'قيد الشحن' | 'وصل' | 'مكتمل';

export interface InboundOrderItemUi {
  id: string;
  productName: string;
  productSKU: string;
  quantityOrdered: number;
  quantityReceived: number;
  quantityRemaining: number;
}

export interface InboundOrderUi {
  id: string;
  orderId: string;
  client: string;
  warehouse: string;
  status: InboundOrderStatusUi;
  shipmentStatus: ShipmentStatusUi;
  expectedDate: string;
  assignedTo: string;
  createdAt: string;
  items: InboundOrderItemUi[];
  stages?: Array<{
    stage: string;
    status: string;
    assignedWorker?: string;
    completedAt?: string;
  }>;
  approvals?: Array<{
    id: string;
    type: string;
    status: string;
    requestedAt: string;
  }>;
}

function toNum(x: number | string | unknown): number {
  if (typeof x === 'number' && !Number.isNaN(x)) return x;
  if (typeof x === 'string') return parseFloat(x) || 0;
  if (x != null && typeof x === 'object' && typeof (x as { toNumber?: () => number }).toNumber === 'function')
    return (x as { toNumber: () => number }).toNumber();
  if (x != null && typeof (x as { toString?: () => string }).toString === 'function')
    return parseFloat((x as { toString: () => string }).toString()) || 0;
  return 0;
}

function statusToUi(status: string): InboundOrderStatusUi {
  const map: Record<string, InboundOrderStatusUi> = {
    DRAFT: 'جديد',
    PENDING: 'جديد',
    CONFIRMED: 'قيد المعالجة',
    IN_PROGRESS: 'قيد المعالجة',
    RECEIVING: 'قيد الاستلام',
    SHIPPED: 'قيد المعالجة',
    COMPLETED: 'مكتمل',
    CANCELLED: 'ملغي',
  };
  return map[status] ?? 'جديد';
}

function formatDate(d: string | null): string {
  if (!d) return '';
  try {
    return new Date(d).toISOString().split('T')[0];
  } catch {
    return String(d);
  }
}

function formatDateTime(d: string): string {
  try {
    const dt = new Date(d);
    return dt.toISOString().split('T')[0] + ' ' + dt.toTimeString().slice(0, 5);
  } catch {
    return d;
  }
}

export function mapInboundOrderApiToUi(o: InboundOrderApi): InboundOrderUi {
  const items: InboundOrderItemUi[] = (o.items ?? []).map((it) => {
    const ordered = toNum(it.qtyOrdered);
    const received = toNum(it.qtyReceived);
    return {
      id: it.id,
      productName: it.product?.name ?? '',
      productSKU: it.product?.sku ?? '',
      quantityOrdered: ordered,
      quantityReceived: received,
      quantityRemaining: Math.max(0, ordered - received),
    };
  });
  const assignedTo =
    o.createdByActor?.user?.email ??
    o.createdByActor?.clientAccount?.email ??
    '-';
  return {
    id: o.id,
    orderId: o.orderNumber ?? o.id.slice(0, 8),
    client: o.client?.name ?? '',
    warehouse: o.warehouse?.name ?? '',
    status: statusToUi(o.status),
    shipmentStatus: 'لم يبدأ',
    expectedDate: formatDate(o.expectedDate),
    assignedTo,
    createdAt: formatDateTime(o.createdAt),
    items,
    stages: [
      { stage: 'استلام', status: 'pending' },
      { stage: 'فحص', status: 'pending' },
      { stage: 'وضع بعيد', status: 'pending' },
      { stage: 'مكتمل', status: 'pending' },
    ],
  };
}

export interface InboundOrderFilter {
  clientId?: string;
  warehouseId?: string;
  status?: string;
  orderNumber?: string;
  expectedDateFrom?: string;
  expectedDateTo?: string;
}

export async function fetchInboundOrders(
  filter?: InboundOrderFilter,
): Promise<InboundOrderUi[]> {
  const params = new URLSearchParams();
  if (filter?.clientId) params.set('clientId', filter.clientId);
  if (filter?.warehouseId) params.set('warehouseId', filter.warehouseId);
  if (filter?.status) params.set('status', filter.status);
  if (filter?.orderNumber) params.set('orderNumber', filter.orderNumber);
  if (filter?.expectedDateFrom)
    params.set('expectedDateFrom', filter.expectedDateFrom);
  if (filter?.expectedDateTo)
    params.set('expectedDateTo', filter.expectedDateTo);
  const q = params.toString();
  const list = await apiFetch<InboundOrderApi[]>(
    `/inbound-orders${q ? `?${q}` : ''}`,
  );
  return (Array.isArray(list) ? list : []).map(mapInboundOrderApiToUi);
}

export async function fetchInboundOrder(id: string): Promise<InboundOrderUi | null> {
  try {
    const o = await apiFetch<InboundOrderApi>(`/inbound-orders/${id}`);
    return mapInboundOrderApiToUi(o);
  } catch {
    return null;
  }
}

export interface CreateInboundOrderPayload {
  clientId: string;
  warehouseId: string;
  orderNumber?: string;
  expectedDate?: string;
}

export async function createInboundOrder(
  payload: CreateInboundOrderPayload,
): Promise<InboundOrderUi> {
  const created = await apiFetch<InboundOrderApi>('/inbound-orders', {
    method: 'POST',
    body: JSON.stringify({
      clientId: payload.clientId,
      warehouseId: payload.warehouseId,
      orderNumber: payload.orderNumber,
      expectedDate: payload.expectedDate || undefined,
    }),
  });
  return mapInboundOrderApiToUi(created);
}

export interface AddInboundOrderItemPayload {
  productId: string;
  uomId: string;
  qtyOrdered: number;
}

export async function addInboundOrderItem(
  orderId: string,
  payload: AddInboundOrderItemPayload,
): Promise<void> {
  await apiFetch(`/inbound-orders/${orderId}/items`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

/** Status UI label -> backend enum for filter */
export const INBOUND_STATUS_TO_API: Record<string, string> = {
  جديد: 'PENDING',
  'قيد المعالجة': 'IN_PROGRESS',
  'قيد الاستلام': 'RECEIVING',
  مكتمل: 'COMPLETED',
  ملغي: 'CANCELLED',
};

export async function updateInboundOrder(
  id: string,
  payload: { status?: string; orderNumber?: string; expectedDate?: string },
): Promise<InboundOrderUi> {
  const updated = await apiFetch<InboundOrderApi>(`/inbound-orders/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
  return mapInboundOrderApiToUi(updated);
}
