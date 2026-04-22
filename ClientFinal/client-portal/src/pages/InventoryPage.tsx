import { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  fetchClientPortalCurrentStock,
  getInventoryErrorMessage,
  mapStockToTableRow,
} from '@/api/clientPortalInventory';

export function InventoryPage() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [rows, setRows] = useState<ReturnType<typeof mapStockToTableRow>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const stock = await fetchClientPortalCurrentStock({
        ...(dateFrom ? { dateFrom } : {}),
        ...(dateTo ? { dateTo } : {}),
      });
      setRows(stock.map(mapStockToTableRow));
    } catch (e) {
      console.error('Failed to load client portal inventory', e);
      setError(getInventoryErrorMessage(e));
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [dateFrom, dateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">المخزون الحالي</h1>
          <p className="text-sm text-gray-500 mt-1">عرض مخزون شركتك فقط</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
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
              { key: 'productName', label: 'اسم المنتج' },
              { key: 'productCode', label: 'كود المنتج' },
              { key: 'uom', label: 'وحدة القياس' },
              { key: 'currentQuantity', label: 'الكمية الحالية' },
              { key: 'lastMovementDate', label: 'آخر تحديث' },
              { key: 'notes', label: 'تفاصيل' },
            ]}
            data={rows}
            getRow={(r) => [
              r.productName,
              r.productCode,
              r.uom,
              r.currentQuantity.toLocaleString('en-US'),
              r.lastMovementDate,
              r.notes || '-',
            ]}
            filename="inventory"
            disabled={loading}
            className="text-[#176C33] border-[#176C33]/30"
          />
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>تعذر التحميل</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
              إعادة المحاولة
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Card className="shadow-sm mt-6">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
              تاريخ آخر تحديث للسجل (من / إلى)
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
        </CardContent>
      </Card>

      <Card className="shadow-sm mt-6">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    اسم المنتج
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    كود المنتج
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    وحدة القياس
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الكمية الحالية
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    آخر تحديث
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تفاصيل
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-10 px-4">
                      <Skeleton className="h-32 w-full rounded-lg" />
                      <p className="text-center text-sm text-gray-500 mt-3">جارِ تحميل المخزون...</p>
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-sm text-gray-500">
                      {dateFrom || dateTo
                        ? 'لا توجد سجلات مطابقة للفلتر المحدد.'
                        : 'لا توجد بيانات مخزون.'}
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">{row.productName}</td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                        {row.productCode}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">{row.uom}</td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {row.currentQuantity.toLocaleString('en-US')}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">{row.lastMovementDate}</td>
                      <td className="py-4 px-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className="text-sm text-[#176C33] hover:text-[#104920] hover:underline cursor-pointer transition-colors"
                            >
                              {row.notes ? 'عرض التفاصيل' : '—'}
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>تفاصيل السجل — {row.productName}</DialogTitle>
                              <DialogDescription className="text-right">{row.productCode}</DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 space-y-2 text-right text-sm text-gray-700">
                              <p>
                                <span className="font-medium">الكمية:</span>{' '}
                                {row.currentQuantity.toLocaleString('en-US')} {row.uom}
                              </p>
                              <p>
                                <span className="font-medium">آخر تحديث:</span> {row.lastMovementDate}
                              </p>
                              <p className="leading-relaxed">
                                {row.notes || 'لا توجد تفاصيل إضافية (مستودع/موقع/دفعة).'}
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
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
