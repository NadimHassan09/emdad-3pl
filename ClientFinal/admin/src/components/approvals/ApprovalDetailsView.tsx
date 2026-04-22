import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Approval, ApprovalType } from './approval-model';
import { approvalTypeLabel, displayValue } from './approval-model';
import { ApprovalTimeline } from './ApprovalTimeline';
import { ApprovalActions } from './ApprovalActions';

type ApprovalDetailsViewProps = {
  approval: Approval;
  loading?: boolean;
  onApprove: (comment?: string) => Promise<void>;
  onReject: (comment: string) => Promise<void>;
};

function ProductsTable({ rows, showStock }: { rows: Approval['products']; showStock?: boolean }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-right">اسم المنتج</TableHead>
          <TableHead className="text-right">الكمية</TableHead>
          <TableHead className="text-right">SKU</TableHead>
          {showStock && <TableHead className="text-right">المخزون المتاح</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={showStock ? 4 : 3} className="text-center text-gray-500 py-6">
              -
            </TableCell>
          </TableRow>
        ) : (
          rows.map((p, idx) => (
            <TableRow key={`${p.name}-${idx}`}>
              <TableCell>{displayValue(p.name)}</TableCell>
              <TableCell>{displayValue(p.quantity)}</TableCell>
              <TableCell>{displayValue(p.sku)}</TableCell>
              {showStock && <TableCell>{displayValue(p.availableStock)}</TableCell>}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

function InboundDetails({ approval }: { approval: Approval }) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-base">تفاصيل الطلب الوارد</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-500">رقم الطلب:</span> {displayValue(approval.reference)}</div>
          <div><span className="text-gray-500">العميل:</span> {displayValue(approval.client)}</div>
          <div><span className="text-gray-500">المستودع:</span> {displayValue(approval.warehouse)}</div>
          <div><span className="text-gray-500">سبب الموافقة:</span> {displayValue(approval.reason)}</div>
        </div>
        <ProductsTable rows={approval.products} />
      </CardContent>
    </Card>
  );
}

function OutboundDetails({ approval }: { approval: Approval }) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-base">تفاصيل الطلب الصادر</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-500">رقم الطلب:</span> {displayValue(approval.reference)}</div>
          <div><span className="text-gray-500">العميل:</span> {displayValue(approval.client)}</div>
          <div><span className="text-gray-500">سبب الموافقة:</span> {displayValue(approval.reason)}</div>
          <div><span className="text-gray-500">ملاحظات:</span> {displayValue(approval.notes)}</div>
        </div>
        <ProductsTable rows={approval.products} showStock />
      </CardContent>
    </Card>
  );
}

function AdjustmentDetails({ approval }: { approval: Approval }) {
  const raw = approval.raw as any;
  const qty = Number(raw?.quantityChange ?? raw?.adjustmentInfo?.quantityChange ?? 0);
  const signed = Number.isFinite(qty) && qty !== 0 ? `${qty > 0 ? '+' : ''}${qty}` : '-';
  const adjType = qty > 0 ? 'Increase' : qty < 0 ? 'Decrease' : '-';

  return (
    <Card>
      <CardHeader><CardTitle className="text-base">تفاصيل تعديل المخزون</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-500">اسم المنتج:</span> {displayValue(raw?.productName ?? raw?.product?.name)}</div>
          <div><span className="text-gray-500">العميل:</span> {displayValue(approval.client)}</div>
          <div><span className="text-gray-500">نوع التعديل:</span> {adjType}</div>
          <div><span className="text-gray-500">تغير الكمية:</span> {signed}</div>
          <div className="md:col-span-2"><span className="text-gray-500">السبب:</span> {displayValue(approval.reason)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function ReturnDetails({ approval }: { approval: Approval }) {
  const raw = approval.raw as any;
  return (
    <Card>
      <CardHeader><CardTitle className="text-base">تفاصيل المرتجع</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-500">العميل:</span> {displayValue(approval.client)}</div>
          <div><span className="text-gray-500">اسم المنتج:</span> {displayValue(raw?.productName ?? raw?.product?.name)}</div>
          <div><span className="text-gray-500">الكمية المرتجعة:</span> {displayValue(raw?.returnedQuantity ?? raw?.quantity)}</div>
          <div><span className="text-gray-500">الحالة:</span> {displayValue(raw?.condition ?? raw?.returnCondition)}</div>
          <div className="md:col-span-2"><span className="text-gray-500">سبب الإرجاع:</span> {displayValue(approval.reason)}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function GenericDetails({ approval }: { approval: Approval }) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-base">تفاصيل الموافقة</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div><span className="text-gray-500">المرجع:</span> {displayValue(approval.reference)}</div>
        <div><span className="text-gray-500">العميل:</span> {displayValue(approval.client)}</div>
        <div><span className="text-gray-500">المستودع:</span> {displayValue(approval.warehouse)}</div>
        <div><span className="text-gray-500">السبب:</span> {displayValue(approval.reason)}</div>
      </CardContent>
    </Card>
  );
}

const RENDERER_MAP: Record<ApprovalType, (approval: Approval) => ReactNode> = {
  inbound: (approval) => <InboundDetails approval={approval} />,
  outbound: (approval) => <OutboundDetails approval={approval} />,
  adjustment: (approval) => <AdjustmentDetails approval={approval} />,
  return: (approval) => <ReturnDetails approval={approval} />,
  invoice: (approval) => <GenericDetails approval={approval} />,
  order: (approval) => <GenericDetails approval={approval} />,
};

export function ApprovalDetailsView({ approval, loading = false, onApprove, onReject }: ApprovalDetailsViewProps) {
  const typeRenderer = RENDERER_MAP[approval.type] ?? RENDERER_MAP.order;
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span>{approvalTypeLabel(approval.type)}</span>
            <Badge
              variant={
                approval.status === 'موافق عليه'
                  ? 'default'
                  : approval.status === 'مرفوض'
                    ? 'destructive'
                    : 'secondary'
              }
            >
              {approval.status}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-500">رقم الموافقة:</span> {displayValue(approval.id)}</div>
          <div><span className="text-gray-500">المرجع:</span> {displayValue(approval.reference)}</div>
          <div><span className="text-gray-500">طلب بواسطة:</span> {displayValue(approval.requestedBy)}</div>
          <div><span className="text-gray-500">تاريخ الطلب:</span> {displayValue(approval.requestedAt)}</div>
          <div className="md:col-span-2"><span className="text-gray-500">السبب:</span> {displayValue(approval.reason)}</div>
        </CardContent>
      </Card>

      {typeRenderer(approval)}
      <ApprovalTimeline approval={approval} />

      <Card>
        <CardHeader><CardTitle className="text-base">الإجراءات</CardTitle></CardHeader>
        <CardContent>
          <ApprovalActions approval={approval} loading={loading} onApprove={onApprove} onReject={onReject} />
        </CardContent>
      </Card>
    </div>
  );
}
