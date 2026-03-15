import { apiFetch } from './api';

export interface OutboundOrderItemApi {
  id: string;
  productId: string;
  qtyOrdered: number | string;
  qtyShipped: number | string;
  product?: { id: string; sku: string; name: string };
  uom?: { id: string; code: string; name: string };
}

export interface OutboundOrderApi {
  id: string;
  clientId: string;
  warehouseId: string;
  orderNumber?: string | null;
  status: string;
  currentStage?: string | null;
  expectedShipDate: string | null;
  createdAt: string;
  client?: { id: string; code: string; name: string };
  warehouse?: { id: string; code: string; name: string };
  items?: OutboundOrderItemApi[];
}

export type OutboundOrderStatusUi =
  | 'جديد'
  | 'قيد المعالجة'
  | 'قيد الشحن'
  | 'مكتمل'
  | 'ملغي';
export type OutboundShipmentStatusUi = 'لم يبدأ' | 'قيد الشحن' | 'شُحن' | 'مكتمل';

export interface OutboundOrderItemUi {
  id: string;
  productName: string;
  productSKU: string;
  quantityOrdered: number;
  quantityShipped: number;
  quantityRemaining: number;
  availableQuantity: number;
  hasShortage: boolean;
}

export interface OutboundOrderUi {
  id: string;
  orderId: string;
  client: string;
  warehouse: string;
  status: OutboundOrderStatusUi;
  shipmentStatus: OutboundShipmentStatusUi;
  expectedShipDate: string;
  shortageFlag: boolean;
  createdAt: string;
  items: OutboundOrderItemUi[];
  allocations: Array<{
    id: string;
    productSKU: string;
    batchCode: string;
    expiredDate: string;
    rotationIndicator: string;
    location: string;
    locationPath: string;
  }>;
  stages: Array<{
    stage: string;
    status: string;
    assignedWorker?: string;
    completedAt?: string;
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

function statusToUi(status: string): OutboundOrderStatusUi {
  const map: Record<string, OutboundOrderStatusUi> = {
    DRAFT: 'جديد',
    PENDING: 'جديد',
    CONFIRMED: 'قيد المعالجة',
    IN_PROGRESS: 'قيد المعالجة',
    RECEIVING: 'قيد المعالجة',
    SHIPPED: 'مكتمل',
    COMPLETED: 'مكتمل',
    CANCELLED: 'ملغي',
  };
  return map[status] ?? 'جديد';
}

function shipmentStatusToUi(status: string): OutboundShipmentStatusUi {
  if (status === 'SHIPPED' || status === 'COMPLETED') return 'شُحن';
  if (status === 'IN_PROGRESS' || status === 'RECEIVING') return 'قيد الشحن';
  return 'لم يبدأ';
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

export function mapOutboundOrderApiToUi(o: OutboundOrderApi): OutboundOrderUi {
  const items: OutboundOrderItemUi[] = (o.items ?? []).map((it) => {
    const ordered = toNum(it.qtyOrdered);
    const shipped = toNum(it.qtyShipped);
    return {
      id: it.id,
      productName: it.product?.name ?? '',
      productSKU: it.product?.sku ?? '',
      quantityOrdered: ordered,
      quantityShipped: shipped,
      quantityRemaining: Math.max(0, ordered - shipped),
      availableQuantity: 0,
      hasShortage: false,
    };
  });
  const orderStatus = statusToUi(o.status);
  const shipStatus = shipmentStatusToUi(o.status);
  return {
    id: o.id,
    orderId: o.orderNumber ?? o.id.slice(0, 8),
    client: o.client?.name ?? '',
    warehouse: o.warehouse?.name ?? '',
    status: orderStatus,
    shipmentStatus: shipStatus,
    expectedShipDate: formatDate(o.expectedShipDate),
    shortageFlag: false,
    createdAt: formatDateTime(o.createdAt),
    items,
    allocations: [],
    stages: [
      { stage: 'انتقاء', status: 'pending' },
      { stage: 'تعبئة', status: 'pending' },
      { stage: 'شحن', status: o.status === 'SHIPPED' || o.status === 'COMPLETED' ? 'completed' : 'pending' },
      { stage: 'مكتمل', status: o.status === 'SHIPPED' || o.status === 'COMPLETED' ? 'completed' : 'pending' },
    ],
  };
}

export interface OutboundOrderFilter {
  clientId?: string;
  warehouseId?: string;
  status?: string;
  orderNumber?: string;
  expectedShipDateFrom?: string;
  expectedShipDateTo?: string;
}

export async function fetchOutboundOrders(
  filter?: OutboundOrderFilter,
): Promise<OutboundOrderUi[]> {
  const params = new URLSearchParams();
  if (filter?.clientId) params.set('clientId', filter.clientId);
  if (filter?.warehouseId) params.set('warehouseId', filter.warehouseId);
  if (filter?.status) params.set('status', filter.status);
  if (filter?.orderNumber) params.set('orderNumber', filter.orderNumber);
  if (filter?.expectedShipDateFrom)
    params.set('expectedShipDateFrom', filter.expectedShipDateFrom);
  if (filter?.expectedShipDateTo)
    params.set('expectedShipDateTo', filter.expectedShipDateTo);
  const q = params.toString();
  const list = await apiFetch<OutboundOrderApi[]>(
    `/outbound-orders${q ? `?${q}` : ''}`,
  );
  return (Array.isArray(list) ? list : []).map(mapOutboundOrderApiToUi);
}

export async function fetchOutboundOrder(id: string): Promise<OutboundOrderUi | null> {
  try {
    const o = await apiFetch<OutboundOrderApi>(`/outbound-orders/${id}`);
    return mapOutboundOrderApiToUi(o);
  } catch {
    return null;
  }
}

export interface CreateOutboundOrderPayload {
  clientId: string;
  warehouseId: string;
  orderNumber?: string;
  expectedShipDate?: string;
}

export async function createOutboundOrder(
  payload: CreateOutboundOrderPayload,
): Promise<OutboundOrderUi> {
  const created = await apiFetch<OutboundOrderApi>('/outbound-orders', {
    method: 'POST',
    body: JSON.stringify({
      clientId: payload.clientId,
      warehouseId: payload.warehouseId,
      orderNumber: payload.orderNumber,
      expectedShipDate: payload.expectedShipDate || undefined,
    }),
  });
  return mapOutboundOrderApiToUi(created);
}

export interface AddOutboundOrderItemPayload {
  productId: string;
  uomId: string;
  qtyOrdered: number;
}

export async function addOutboundOrderItem(
  orderId: string,
  payload: AddOutboundOrderItemPayload,
): Promise<void> {
  await apiFetch(`/outbound-orders/${orderId}/items`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

/** Status UI label -> backend enum for filter */
export const OUTBOUND_STATUS_TO_API: Record<string, string> = {
  جديد: 'PENDING',
  'قيد المعالجة': 'IN_PROGRESS',
  'قيد الشحن': 'IN_PROGRESS',
  مكتمل: 'COMPLETED',
  ملغي: 'CANCELLED',
};

export async function updateOutboundOrder(
  id: string,
  payload: { status?: string; orderNumber?: string; expectedShipDate?: string },
): Promise<OutboundOrderUi> {
  const updated = await apiFetch<OutboundOrderApi>(`/outbound-orders/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
  return mapOutboundOrderApiToUi(updated);
}
