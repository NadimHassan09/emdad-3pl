import { useState, useEffect, useCallback } from 'react';
import { Plus, RefreshCw } from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  fetchClientPortalInboundList,
  fetchClientPortalOutboundList,
} from '@/api/clientPortalOrders';
import {
  orderStatusToAr,
  matchesStatusFilter,
  getOrdersErrorMessage,
} from '@/api/orderUtils';

export type SimpleOrderRow = {
  id: string;
  orderNumber: string;
  creationDate: string;
  status: string;
  expectedDate: string;
  itemsCount: number;
  notes: string;
};

function mapInbound(o: Record<string, unknown>): SimpleOrderRow {
  const items = (o.items as unknown[]) || [];
  const exp = o.expectedDate as string | null | undefined;
  return {
    id: String(o.id),
    orderNumber: (o.orderNumber as string) || String(o.id).slice(0, 8),
    creationDate: o.createdAt
      ? new Date(o.createdAt as string).toLocaleDateString('ar-SA')
      : '',
    status: orderStatusToAr(String(o.status || '')),
    expectedDate: exp ? new Date(exp).toLocaleDateString('ar-SA') : '—',
    itemsCount: items.length,
    notes: (o.currentStage as string) || '',
  };
}

function mapOutbound(o: Record<string, unknown>): SimpleOrderRow {
  const items = (o.items as unknown[]) || [];
  const exp = o.expectedShipDate as string | null | undefined;
  return {
    id: String(o.id),
    orderNumber: (o.orderNumber as string) || String(o.id).slice(0, 8),
    creationDate: o.createdAt
      ? new Date(o.createdAt as string).toLocaleDateString('ar-SA')
      : '',
    status: orderStatusToAr(String(o.status || '')),
    expectedDate: exp ? new Date(exp).toLocaleDateString('ar-SA') : '—',
    itemsCount: items.length,
    notes: (o.currentStage as string) || '',
  };
}

export function OrdersPage({
  onCreateOrder,
  onCreateOrderDetails,
}: {
  onCreateOrder: (type: 'وارد' | 'صادر') => void;
  onCreateOrderDetails: (orderRef: string, orderType: 'وارد' | 'صادر') => void;
}) {
  const [status, setStatus] = useState('الكل');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [orderType, setOrderType] = useState<'وارد' | 'صادر'>('وارد');
  const [incomingRows, setIncomingRows] = useState<SimpleOrderRow[]>([]);
  const [outgoingRows, setOutgoingRows] = useState<SimpleOrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [inbound, outbound] = await Promise.all([
        fetchClientPortalInboundList({
          expectedDateFrom: dateFrom || undefined,
          expectedDateTo: dateTo || undefined,
        }),
        fetchClientPortalOutboundList({
          expectedShipDateFrom: dateFrom || undefined,
          expectedShipDateTo: dateTo || undefined,
        }),
      ]);
      setIncomingRows((inbound as Record<string, unknown>[]).map(mapInbound));
      setOutgoingRows((outbound as Record<string, unknown>[]).map(mapOutbound));
    } catch (e) {
      console.error(e);
      setError(getOrdersErrorMessage(e));
      setIncomingRows([]);
      setOutgoingRows([]);
    } finally {
      setLoading(false);
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  const sourceRows = orderType === 'وارد' ? incomingRows : outgoingRows;
  const tableData = sourceRows.filter((r) => matchesStatusFilter(r.status, status));

  const stats = {
    pending: sourceRows.filter((r) => r.status === 'بانتظار الموافقة').length,
    inProgress: sourceRows.filter((r) => r.status === 'قيد التنفيذ').length,
    completed: sourceRows.filter((r) => r.status === 'مكتمل').length,
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {orderType === 'وارد' ? 'طلبات الوارد' : 'طلبات الصادر'}
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant={orderType === 'وارد' ? 'default' : 'outline'}
              onClick={() => setOrderType('وارد')}
              className={
                orderType === 'وارد'
                  ? 'bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white'
                  : 'text-[#176C33] border-[#176C33]/30'
              }
            >
              وارد
            </Button>
            <Button
              variant={orderType === 'صادر' ? 'default' : 'outline'}
              onClick={() => setOrderType('صادر')}
              className={
                orderType === 'صادر'
                  ? 'bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white'
                  : 'text-[#176C33] border-[#176C33]/30'
              }
            >
              صادر
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => void load()}
            disabled={loading}
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            تحديث
          </Button>
          <CsvButton
            columns={[
              { key: 'orderNumber', label: 'رقم الطلب' },
              { key: 'creationDate', label: 'تاريخ الإنشاء' },
              { key: 'status', label: 'الحالة' },
              { key: 'expectedDate', label: 'التاريخ المتوقع' },
              { key: 'itemsCount', label: 'عدد البنود' },
              { key: 'notes', label: 'ملاحظات' },
            ]}
            data={tableData}
            getRow={(r) => [r.orderNumber, r.creationDate, r.status, r.expectedDate, r.itemsCount, r.notes]}
            filename={orderType === 'وارد' ? 'orders-inbound' : 'orders-outbound'}
            disabled={loading}
          />
          <Button
            onClick={() => onCreateOrder(orderType)}
            className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            {orderType === 'وارد' ? 'إرسال طلب وارد' : 'إرسال طلب صادر'}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
              إعادة المحاولة
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading ? (
          [1, 2, 3].map((i) => (
            <Card key={i} className="border-0 shadow-sm bg-white">
              <CardContent className="p-5">
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-8 w-12" />
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <Card className="stat-card border-0 shadow-sm bg-white">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-1">بانتظار الموافقة</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
              </CardContent>
            </Card>
            <Card className="stat-card border-0 shadow-sm bg-white">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-1">قيد التنفيذ</p>
                <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
              </CardContent>
            </Card>
            <Card className="stat-card border-0 shadow-sm bg-white">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-1">مكتمل</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">الحالة</label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="الكل">الكل</SelectItem>
                  <SelectItem value="بانتظار الموافقة">بانتظار الموافقة</SelectItem>
                  <SelectItem value="مؤكد">مؤكد</SelectItem>
                  <SelectItem value="قيد التنفيذ">قيد التنفيذ</SelectItem>
                  <SelectItem value="مكتمل">مكتمل</SelectItem>
                  <SelectItem value="ملغي">ملغي</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {orderType === 'وارد' ? 'تاريخ الوصول المتوقع' : 'تاريخ الشحن المتوقع'}
              </label>
              <div className="flex flex-wrap items-center gap-3 flex-1">
                <Input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="max-w-xs"
                />
                <span className="text-gray-500">إلى</span>
                <Input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">رقم الطلب</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">تاريخ الإنشاء</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الحالة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">التاريخ المتوقع</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">عدد البنود</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-10 px-4">
                      <Skeleton className="h-24 w-full rounded-lg" />
                    </td>
                  </tr>
                ) : tableData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-sm text-gray-500">
                      لا توجد طلبات مطابقة.
                    </td>
                  </tr>
                ) : (
                  tableData.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm font-mono font-medium">{row.orderNumber}</td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">{row.creationDate}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            row.status === 'مكتمل'
                              ? 'bg-green-100 text-green-700'
                              : row.status === 'قيد التنفيذ'
                                ? 'bg-blue-100 text-blue-700'
                                : row.status === 'ملغي'
                                  ? 'bg-red-100 text-red-700'
                                  : row.status === 'بانتظار الموافقة'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : row.status === 'مؤكد'
                                      ? 'bg-emerald-100 text-emerald-700'
                                      : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">{row.expectedDate}</td>
                      <td className="py-4 px-4 text-sm font-medium">{row.itemsCount}</td>
                      <td className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => onCreateOrderDetails(row.id, orderType)}
                          className="text-sm text-[#176C33] hover:underline"
                        >
                          عرض
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
