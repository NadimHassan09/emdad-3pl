import { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  fetchClientPortalBillingOverview,
  getBillingErrorMessage,
  type ClientPortalBillingOverview,
} from '@/api/clientPortalBilling';

function formatUsd(n: number) {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(n);
}

export function BillingPage() {
  const [data, setData] = useState<ClientPortalBillingOverview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const overview = await fetchClientPortalBillingOverview();
      setData(overview);
    } catch (e) {
      console.error(e);
      setError(getBillingErrorMessage(e));
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const plan = data?.currentPlan;
  const usage = data?.usage;

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">الفوترة والاشتراك</h1>
          {data && (
            <p className="text-sm text-gray-500 mt-1">
              الفترة: {data.periodStart} — {data.periodEnd} (تقديرات الشهر الحالي)
            </p>
          )}
        </div>
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
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>تعذر التحميل</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
              إعادة المحاولة
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">الخطة الحالية</h2>
        <Button variant="outline" size="sm" disabled className="opacity-60">
          تغيير الخطة
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading && !data ? (
          [1, 2, 3].map((i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-5">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-40" />
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-1">الخطة</p>
                <p className="text-lg font-bold text-gray-900">{plan?.planName ?? '—'}</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-1">تاريخ انتهاء الاشتراك</p>
                <p className="text-lg font-bold text-gray-900 font-mono">{plan?.renewalDate ?? '—'}</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-gray-500 mb-1">الحالة</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  {plan?.status ?? '—'}
                </span>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">دورة الاستخدام الحالية</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">المخزون (مقارنة بسقف الخطة)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading && !data ? (
                <Skeleton className="h-32 w-full" />
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">الكمية الحالية (إجمالي وحدات)</span>
                      <span className="font-medium text-gray-900">
                        {usage?.space.usedUnits.toLocaleString('ar-SA') ?? '0'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">السقف / المرجع</span>
                      <span className="font-medium text-gray-900">
                        {usage?.space.totalUnits.toLocaleString('ar-SA') ?? '—'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-[#176C33] to-[#104920] h-3 rounded-full transition-all"
                        style={{ width: `${usage?.space.usedPercent ?? 0}%` }}
                      />
                    </div>
                    <div className="text-center text-xs text-gray-500">
                      {usage?.space.usedPercent ?? 0}% من السقف المرجعي
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">تكلفة تخزين (معاملات الشهر)</p>
                    <p className="text-xl font-bold text-gray-900">
                      {formatUsd(usage?.space.estimatedCostUsd ?? 0)}
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">حركات الوارد</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading && !data ? (
                <Skeleton className="h-32 w-full" />
              ) : (
                <>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">عدد حركات الاستلام هذا الشهر</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {(usage?.incomingMovements.count ?? 0).toLocaleString('ar-SA')}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">التكلفة المقدرة (حصة من حركات الفوترة)</p>
                    <p className="text-xl font-bold text-gray-900">
                      {formatUsd(usage?.incomingMovements.estimatedCostUsd ?? 0)}
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">طلبات الصادر</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading && !data ? (
                <Skeleton className="h-32 w-full" />
              ) : (
                <>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">عدد حركات الشحن هذا الشهر</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {(usage?.outgoingOrders.count ?? 0).toLocaleString('ar-SA')}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">التكلفة المقدرة (حصة من حركات الفوترة)</p>
                    <p className="text-xl font-bold text-gray-900">
                      {formatUsd(usage?.outgoingOrders.estimatedCostUsd ?? 0)}
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="shadow-sm bg-gradient-to-r from-[#176C33]/10 to-[#104920]/10">
        <CardContent className="p-6">
          {loading && !data ? (
            <Skeleton className="h-16 w-full max-w-md" />
          ) : (
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">الإجمالي التقديري</h3>
                <p className="text-sm text-gray-600">مجمع معاملات الفوترة لهذا الشهر (تقريبي)</p>
              </div>
              <div className="text-left">
                <p className="text-4xl font-bold text-[#176C33]">
                  {formatUsd(data?.totalEstimatedUsd ?? 0)}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
