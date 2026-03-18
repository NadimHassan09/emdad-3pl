import { useState, useEffect, useCallback } from 'react';
import { Download, ArrowLeftRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  fetchInboundOrderDetail,
  fetchOutboundOrderDetail,
} from '@/api/clientPortalOrders';
import { orderStatusToAr, getOrdersErrorMessage } from '@/api/orderUtils';

function toNum(v: unknown): number {
  if (typeof v === 'number') return v;
  if (v && typeof v === 'object' && 'toNumber' in v) {
    return (v as { toNumber: () => number }).toNumber();
  }
  return Number(v) || 0;
}

export function OrderDetailsPage({
  orderRef,
  orderType,
  onBack,
}: {
  orderRef: string;
  orderType: 'وارد' | 'صادر';
  onBack: () => void;
}) {
  const [order, setOrder] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [itemNotes, setItemNotes] = useState<Record<number, string>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tempNotes, setTempNotes] = useState('');

  const load = useCallback(async () => {
    if (!orderRef.trim()) {
      setError('معرّف الطلب غير صالح');
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const data =
        orderType === 'وارد'
          ? await fetchInboundOrderDetail(orderRef)
          : await fetchOutboundOrderDetail(orderRef);
      setOrder(data as Record<string, unknown>);
    } catch (e) {
      setError(getOrdersErrorMessage(e));
      setOrder(null);
    } finally {
      setLoading(false);
    }
  }, [orderRef, orderType]);

  useEffect(() => {
    void load();
  }, [load]);

  if (loading && !order) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="space-y-4">
        <Button type="button" variant="outline" onClick={onBack}>
          رجوع للطلبات
        </Button>
        <Alert variant="destructive">
          <AlertTitle>تعذر التحميل</AlertTitle>
          <AlertDescription>{error || 'لا توجد بيانات'}</AlertDescription>
        </Alert>
        <Button type="button" onClick={() => void load()}>
          إعادة المحاولة
        </Button>
      </div>
    );
  }

  const items = (order.items as Record<string, unknown>[]) || [];
  const isInbound = orderType === 'وارد';
  const st = orderStatusToAr(String(order.status || ''));
  const orderNum = (order.orderNumber as string) || String(order.id).slice(0, 8);
  const expRaw = isInbound ? order.expectedDate : order.expectedShipDate;
  const expectedDate = expRaw
    ? new Date(expRaw as string).toLocaleDateString('ar-SA')
    : '—';
  const creationTime = order.createdAt
    ? new Date(order.createdAt as string).toLocaleString('ar-SA')
    : '—';
  const completed =
    String(order.status) === 'COMPLETED' ||
    String(order.status) === 'SHIPPED' ||
    String(order.status) === 'CANCELLED';
  const completionDate = completed && order.updatedAt
    ? new Date(order.updatedAt as string).toLocaleString('ar-SA')
    : '—';
  const wh = order.warehouse as { name?: string; code?: string } | undefined;

  const statusHistory: { dateTime: string; status: string }[] = [
    {
      dateTime: creationTime,
      status: 'تم الإنشاء',
    },
  ];
  if (order.updatedAt && order.updatedAt !== order.createdAt) {
    statusHistory.push({
      dateTime: new Date(order.updatedAt as string).toLocaleString('ar-SA'),
      status: `آخر تحديث — ${st}`,
    });
  }

  const mappedItems = items.map((item, index) => {
    const prod = item.product as { name?: string; sku?: string } | undefined;
    const req = toNum(item.qtyOrdered);
    const done = isInbound ? toNum(item.qtyReceived) : toNum(item.qtyShipped);
    return {
      index,
      productName: prod?.name || '—',
      productCode: prod?.sku || '—',
      requiredQty: req,
      shippedQty: done,
      remaining: Math.max(0, req - done),
      notes: '',
    };
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button type="button" variant="outline" size="sm" onClick={onBack}>
            رجوع
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">
            {orderType === 'وارد' ? 'تفاصيل طلب وارد' : 'تفاصيل طلب صادر'} — {orderNum}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" disabled className="gap-2">
            <Download className="w-4 h-4" />
            تصدير
          </Button>
          <Button variant="outline" size="sm" disabled className="gap-2">
            <ArrowLeftRight className="w-4 h-4" />
            الحركات
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">رقم الطلب</p>
            <p className="text-lg font-bold font-mono">{orderNum}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">الحالة</p>
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                st === 'مكتمل'
                  ? 'bg-green-100 text-green-700'
                  : st === 'قيد التنفيذ'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
              }`}
            >
              {st}
            </span>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">المستودع</p>
            <p className="text-sm font-medium">{wh?.name || wh?.code || '—'}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">تاريخ متوقع</p>
            <p className="font-mono text-sm">{expectedDate}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-5">
            <p className="text-sm text-gray-500 mb-1">الإنشاء / الإكمال</p>
            <p className="text-xs font-mono">{creationTime}</p>
            <p className="text-xs font-mono text-gray-600 mt-1">{completionDate}</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">البنود</h2>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0 overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold">المنتج</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold">SKU</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold">مطلوب</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold">
                    {isInbound ? 'مستلم' : 'مشحون'}
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold">متبقي</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold">ملاحظات محلية</th>
                </tr>
              </thead>
              <tbody>
                {mappedItems.map((item) => (
                  <tr key={item.index} className="border-b border-gray-50">
                    <td className="py-4 px-4 text-sm font-medium">{item.productName}</td>
                    <td className="py-4 px-4 font-mono text-sm">{item.productCode}</td>
                    <td className="py-4 px-4">{item.requiredQty}</td>
                    <td className="py-4 px-4">{item.shippedQty}</td>
                    <td className="py-4 px-4">{item.remaining}</td>
                    <td className="py-4 px-4">
                      <Dialog
                        open={editingIndex === item.index}
                        onOpenChange={(open) => !open && setEditingIndex(null)}
                      >
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingIndex(item.index);
                              setTempNotes(itemNotes[item.index] || '');
                            }}
                            className="text-sm text-[#176C33] hover:underline"
                          >
                            {itemNotes[item.index] ? 'تعديل' : 'إضافة'}
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>ملاحظات — {item.productName}</DialogTitle>
                            <DialogDescription className="text-right">
                              {item.productCode}
                            </DialogDescription>
                          </DialogHeader>
                          <Textarea
                            value={tempNotes}
                            onChange={(e) => setTempNotes(e.target.value)}
                            className="min-h-32"
                          />
                          <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" onClick={() => setEditingIndex(null)}>
                              إلغاء
                            </Button>
                            <Button
                              onClick={() => {
                                setItemNotes((n) => ({ ...n, [item.index]: tempNotes }));
                                setEditingIndex(null);
                              }}
                            >
                              حفظ
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">سجل مبسّط</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {statusHistory.map((h, i) => (
            <Card key={i} className="border-0 shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500">{h.dateTime}</p>
                <p className="font-medium mt-1">{h.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
