import { useState, useEffect, useCallback } from 'react';
import { Download, RefreshCw, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  fetchClientPortalInvoice,
  getInvoicesErrorMessage,
  invoiceStatusToAr,
  centsToAmount,
  type ClientPortalInvoiceDetail,
} from '@/api/clientPortalInvoices';

function statusBadgeClass(ar: string) {
  if (ar === 'مدفوع') return 'bg-green-100 text-green-700';
  if (ar === 'صادرة' || ar === 'متأخر') return 'bg-blue-100 text-blue-700';
  if (ar === 'مسودة') return 'bg-amber-100 text-amber-700';
  if (ar === 'ملغى') return 'bg-red-100 text-red-700';
  return 'bg-gray-100 text-gray-700';
}

function lineLabel(line: ClientPortalInvoiceDetail['lines'][0]): string {
  if (line.description?.trim()) return line.description.trim();
  return String(line.chargeCategory).replace(/_/g, ' ');
}

export function InvoiceDetailsPage({
  invoiceId,
  onBack,
}: {
  invoiceId: string;
  onBack: () => void;
}) {
  const [detail, setDetail] = useState<ClientPortalInvoiceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!invoiceId) {
      setError('معرّف الفاتورة غير صالح.');
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const data = await fetchClientPortalInvoice(invoiceId);
      setDetail(data);
    } catch (e) {
      console.error(e);
      setError(getInvoicesErrorMessage(e));
      setDetail(null);
    } finally {
      setLoading(false);
    }
  }, [invoiceId]);

  useEffect(() => {
    void load();
  }, [load]);

  if (loading && !detail) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-40 w-full rounded-lg" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  if (error && !detail) {
    return (
      <div className="space-y-4">
        <Alert variant="destructive">
          <AlertTitle>خطأ</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
                <RefreshCw className="w-4 h-4 ml-1" />
                إعادة المحاولة
              </Button>
              <Button type="button" variant="outline" size="sm" onClick={onBack}>
                <ArrowRight className="w-4 h-4 ml-1" />
                العودة
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!detail) return null;

  const stAr = invoiceStatusToAr(detail.status);
  const subtotal = centsToAmount(detail.subtotalCents);
  const tax = centsToAmount(detail.taxAmountCents);
  const discount = centsToAmount(detail.discountAmountCents);
  const total = centsToAmount(detail.totalAmountCents);
  const cur = detail.currency;

  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">فاتورة</h1>
          <div className="flex flex-wrap items-center gap-2">
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
            <Button variant="outline" className="gap-2 text-[#176C33] border-[#176C33]/30" disabled>
              <Download className="w-4 h-4" />
              تنزيل PDF
            </Button>
          </div>
        </div>

        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">رقم الفاتورة</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{detail.invoiceNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">بداية الفترة</p>
                <p className="text-lg font-bold text-gray-900 font-mono">
                  {new Date(detail.periodStart).toLocaleDateString('ar-SA')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">نهاية الفترة</p>
                <p className="text-lg font-bold text-gray-900 font-mono">
                  {new Date(detail.periodEnd).toLocaleDateString('ar-SA')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">الحالة</p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusBadgeClass(stAr)}`}
                >
                  {stAr}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">العملة</p>
                <p className="text-lg font-bold text-gray-900">{cur}</p>
              </div>
              {detail.dueDate && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">تاريخ الاستحقاق</p>
                  <p className="text-lg font-bold text-gray-900 font-mono">
                    {new Date(detail.dueDate).toLocaleDateString('ar-SA')}
                  </p>
                </div>
              )}
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">إجمالي المبلغ</p>
                <p className="text-2xl font-bold text-[#176C33]">
                  {total.toLocaleString('ar-SA')} {cur}
                </p>
              </div>
            </div>
            {detail.notes ? (
              <p className="mt-4 text-sm text-gray-600 border-t border-gray-100 pt-4">{detail.notes}</p>
            ) : null}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">بنود الفاتورة</h2>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="data-table w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">البند</th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الكمية</th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">سعر الوحدة</th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">المبلغ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.lines.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-sm text-gray-500">
                          لا توجد بنود.
                        </td>
                      </tr>
                    ) : (
                      detail.lines.map((line) => {
                        const qty = Number(line.quantity);
                        const unit = centsToAmount(line.unitPriceCents);
                        const amt = centsToAmount(line.totalAmountCents);
                        return (
                          <tr key={line.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                            <td className="py-4 px-4 text-sm font-medium">{lineLabel(line)}</td>
                            <td className="py-4 px-4 text-sm">{Number.isFinite(qty) ? qty.toLocaleString('ar-SA') : String(line.quantity)}</td>
                            <td className="py-4 px-4 text-sm">
                              {unit.toLocaleString('ar-SA')} {cur}
                            </td>
                            <td className="py-4 px-4 text-sm font-medium">
                              {amt.toLocaleString('ar-SA')} {cur}
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
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">الإجماليات</h2>
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">المجموع الفرعي</p>
                <p className="text-sm font-medium text-gray-900">
                  {subtotal.toLocaleString('ar-SA')} {cur}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">الضريبة</p>
                <p className="text-sm font-medium text-gray-900">
                  {tax.toLocaleString('ar-SA')} {cur}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">الخصم</p>
                <p className="text-sm font-medium text-gray-900">
                  {discount.toLocaleString('ar-SA')} {cur}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-gray-900">الإجمالي</p>
                  <p className="text-xl font-bold text-[#176C33]">
                    {total.toLocaleString('ar-SA')} {cur}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-end pt-6">
        <Button variant="outline" onClick={onBack} className="text-gray-700 border-gray-300 hover:bg-gray-50">
          العودة إلى القائمة
        </Button>
      </div>
    </>
  );
}
