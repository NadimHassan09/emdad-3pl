export type ApprovalType = 'order' | 'inbound' | 'outbound' | 'adjustment' | 'return' | 'invoice';
export type ApprovalStatus = 'قيد الانتظار' | 'موافق عليه' | 'مرفوض';
export type ApprovalFilterType = 'order' | 'adjustment' | 'return' | 'invoice';

export type ApprovalProductLine = {
  name: string;
  quantity: string;
  sku?: string;
  availableStock?: string;
};

export type Approval = {
  id: string;
  type: ApprovalType;
  reference: string;
  client: string;
  warehouse: string;
  requestedBy: string;
  requestedAt: string;
  reason: string;
  status: ApprovalStatus;
  notes?: string;
  raw: Record<string, unknown>;
  products: ApprovalProductLine[];
};

function asText(value: unknown): string {
  if (value === null || value === undefined) return '-';
  const text = String(value).trim();
  return text || '-';
}

function toProducts(raw: any): ApprovalProductLine[] {
  const candidates = [
    raw?.items,
    raw?.orderItems,
    raw?.products,
    raw?.orderInfo?.items,
    raw?.adjustmentInfo?.items,
    raw?.returnInfo?.items,
  ];
  const source = candidates.find((arr) => Array.isArray(arr));
  if (!Array.isArray(source)) return [];

  return source.map((item: any) => ({
    name: asText(item?.productName ?? item?.name ?? item?.product?.name),
    quantity: asText(item?.quantity ?? item?.requestedQuantity ?? item?.qty ?? item?.quantityChange),
    sku: asText(item?.sku ?? item?.product?.sku),
    availableStock: asText(item?.availableStock ?? item?.stockAvailable ?? item?.availableQty),
  }));
}

export function mapApiApproval(a: any): Approval {
  const orderInfo = a?.orderInfo as
    | { orderNumber?: string; client?: { name?: string }; warehouse?: { name?: string } }
    | undefined;

  const mappedType: ApprovalType =
    a?.approvalStep === 'INBOUND_ORDER'
      ? 'inbound'
      : a?.approvalStep === 'OUTBOUND_ORDER'
        ? 'outbound'
        : a?.referenceType === 'ADJUSTMENT'
          ? 'adjustment'
          : a?.referenceType === 'RETURN'
            ? 'return'
            : a?.referenceType === 'INVOICE'
              ? 'invoice'
              : 'order';

  const requestedAt = a?.createdAt
    ? new Date(a.createdAt).toISOString().slice(0, 16).replace('T', ' ')
    : '-';

  return {
    id: asText(a?.id),
    type: mappedType,
    reference: asText(orderInfo?.orderNumber ?? a?.referenceId),
    client: asText(orderInfo?.client?.name ?? a?.clientInfo?.name),
    warehouse: asText(orderInfo?.warehouse?.name ?? a?.warehouseInfo?.name),
    requestedBy: asText(
      a?.requestedByActor?.user?.email ??
        a?.requestedByActor?.clientAccount?.email ??
        a?.requestedByActorId,
    ),
    requestedAt,
    reason: asText(a?.requestNotes ?? a?.reason),
    status:
      a?.status === 'APPROVED'
        ? 'موافق عليه'
        : a?.status === 'REJECTED'
          ? 'مرفوض'
          : 'قيد الانتظار',
    notes: a?.decisionNotes ? asText(a.decisionNotes) : undefined,
    raw: (a ?? {}) as Record<string, unknown>,
    products: toProducts(a),
  };
}

export function approvalTypeLabel(type: ApprovalType): string {
  if (type === 'inbound') return 'موافقة طلب وارد';
  if (type === 'outbound') return 'موافقة طلب صادر';
  if (type === 'adjustment') return 'موافقة تعديل مخزون';
  if (type === 'return') return 'موافقة مرتجع';
  if (type === 'invoice') return 'موافقة فاتورة';
  return 'موافقة طلب';
}

export function displayValue(value: unknown): string {
  const text = value === undefined || value === null ? '' : String(value).trim();
  return text || '-';
}
