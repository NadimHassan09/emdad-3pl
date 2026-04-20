import { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
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
  fetchClientPortalInvoices,
  getInvoicesErrorMessage,
  invoiceStatusToAr,
  arStatusToApi,
  centsToAmount,
} from '@/api/clientPortalInvoices';
import { formatDateEn } from '@/lib/dateFormat';

function getStatusColor(statusAr: string) {
  switch (statusAr) {
    case 'مدفوع':
      return 'bg-green-100 text-green-700';
    case 'صادرة':
    case 'متأخر':
      return 'bg-blue-100 text-blue-700';
    case 'مسودة':
      return 'bg-amber-100 text-amber-700';
    case 'ملغى':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function InvoicesPage({ onViewInvoice }: { onViewInvoice: (invoiceId: string) => void }) {
  const ALL_STATUSES = '__all__';
  const [status, setStatus] = useState(ALL_STATUSES);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [rows, setRows] = useState<Awaited<ReturnType<typeof fetchClientPortalInvoices>>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const apiStatus =
        status && status !== ALL_STATUSES ? arStatusToApi(status) : undefined;
      const data = await fetchClientPortalInvoices({
        ...(apiStatus ? { status: apiStatus } : {}),
        ...(dateFrom ? { periodFrom: dateFrom } : {}),
        ...(dateTo ? { periodTo: dateTo } : {}),
      });
      setRows(data);
    } catch (e) {
      console.error(e);
      setError(getInvoicesErrorMessage(e));
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [status, dateFrom, dateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">الفواتير</h1>
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
              { key: 'invoiceNumber', label: 'رقم الفاتورة' },
              { key: 'periodStart', label: 'بداية الفترة' },
              { key: 'periodEnd', label: 'نهاية الفترة' },
              { key: 'status', label: 'الحالة' },
              { key: 'total', label: 'الإجمالي' },
              { key: 'currency', label: 'العملة' },
              { key: 'issuedAt', label: 'تاريخ الإصدار' },
              { key: 'paidAt', label: 'تاريخ السداد' },
            ]}
            data={rows}
            getRow={(inv) => {
              const stAr = invoiceStatusToAr(inv.status);
              const total = centsToAmount(inv.totalAmountCents);
              return [
                inv.invoiceNumber,
                formatDateEn(inv.periodStart),
                formatDateEn(inv.periodEnd),
                stAr,
                total.toLocaleString('ar-SA'),
                inv.currency,
                inv.issuedAt ? formatDateEn(inv.issuedAt) : '—',
                inv.paidAt ? formatDateEn(inv.paidAt) : '—',
              ];
            }}
            filename="invoices"
            disabled={loading}
          />
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

      <Card className="shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">الحالة</label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="الكل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL_STATUSES}>الكل</SelectItem>
                  <SelectItem value="مسودة">مسودة</SelectItem>
                  <SelectItem value="صادرة">صادرة</SelectItem>
                  <SelectItem value="مدفوع">مدفوع</SelectItem>
                  <SelectItem value="ملغى">ملغى</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">نطاق الفترة (بداية الفاتورة)</label>
              <div className="flex items-center gap-2">
                <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="flex-1" />
                <span className="text-gray-500 text-sm">إلى</span>
                <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="flex-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">رقم الفاتورة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">بداية الفترة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">نهاية الفترة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الحالة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الإجمالي</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">العملة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">تاريخ الإصدار</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">تاريخ السداد</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={9} className="py-10 px-4">
                      <Skeleton className="h-24 w-full rounded-lg" />
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-10 text-center text-sm text-gray-500">
                      لا توجد فواتير.
                    </td>
                  </tr>
                ) : (
                  rows.map((invoice) => {
                    const stAr = invoiceStatusToAr(invoice.status);
                    const total = centsToAmount(invoice.totalAmountCents);
                    return (
                      <tr key={invoice.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                        <td className="py-4 px-4 text-sm font-mono font-medium">{invoice.invoiceNumber}</td>
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                          {formatDateEn(invoice.periodStart)}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                          {formatDateEn(invoice.periodEnd)}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(stAr)}`}
                          >
                            {stAr}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm font-medium">{total.toLocaleString('ar-SA')}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{invoice.currency}</td>
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                          {invoice.issuedAt
                            ? formatDateEn(invoice.issuedAt)
                            : '—'}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                          {invoice.paidAt ? formatDateEn(invoice.paidAt) : '—'}
                        </td>
                        <td className="py-4 px-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#176C33]"
                            onClick={() => onViewInvoice(invoice.id)}
                          >
                            عرض
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
