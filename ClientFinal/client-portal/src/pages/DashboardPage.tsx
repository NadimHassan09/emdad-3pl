import { useState, useEffect, useCallback } from 'react';
import {
  Package,
  TrendingUp,
  ArrowDown,
  ArrowUp,
  Activity,
  RefreshCw,
} from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  fetchClientPortalDashboard,
  getDashboardErrorMessage,
  type ClientPortalDashboardResponse,
} from '@/api/clientPortalDashboard';

function mapRecentMovements(
  entries: ClientPortalDashboardResponse['recentMovements'],
) {
  return entries.map((entry) => ({
    date: entry.date ? new Date(entry.date).toLocaleString('en-US') : '',
    type:
      entry.movementType === 'RECEIPT'
        ? 'وارد'
        : entry.movementType === 'SHIPMENT'
          ? 'صادر'
          : entry.movementType === 'RETURN'
            ? 'إرجاع'
            : 'تعديل',
    typeColor:
      entry.movementType === 'RECEIPT'
        ? 'bg-green-100 text-green-700'
        : entry.movementType === 'SHIPMENT'
          ? 'bg-rose-100 text-rose-700'
          : 'bg-gray-100 text-gray-700',
    sku: entry.sku || '',
    change: `${entry.qtyChange > 0 ? '+' : ''}${entry.qtyChange}`,
    reference: entry.referenceId || '-',
  }));
}

export function DashboardPage() {
  const [data, setData] = useState<ClientPortalDashboardResponse | null>(null);
  const [recentRows, setRecentRows] = useState<ReturnType<typeof mapRecentMovements>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const dashboard = await fetchClientPortalDashboard();
      setData(dashboard);
      setRecentRows(mapRecentMovements(dashboard.recentMovements));
    } catch (e) {
      console.error('Failed to load client portal dashboard', e);
      setError(getDashboardErrorMessage(e));
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const stats = data?.stats ?? {
    totalProducts: 0,
    totalStock: 0,
    incomingOrders: 0,
    outgoingOrders: 0,
    recentMovements: 0,
  };

  const statsCards = [
    { title: 'إجمالي المنتجات', value: stats.totalProducts, icon: Package, color: 'bg-blue-500' },
    {
      title: 'إجمالي المخزون',
      value: stats.totalStock.toLocaleString('en-US'),
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    { title: 'طلبات وارد', value: stats.incomingOrders, icon: ArrowDown, color: 'bg-purple-500' },
    { title: 'طلبات صادر', value: stats.outgoingOrders, icon: ArrowUp, color: 'bg-orange-500' },
    { title: 'حركات حديثة', value: stats.recentMovements, icon: Activity, color: 'bg-pink-500' },
  ];

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
          <p className="text-gray-500 mt-1">نظرة عامة على مخزونك وحركاتك</p>
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
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>خطأ في التحميل</AlertTitle>
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>{error}</span>
            <Button type="button" variant="outline" size="sm" onClick={() => void load()}>
              إعادة المحاولة
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
        {loading && !data
          ? Array.from({ length: 5 }).map((_, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white">
                <CardContent className="p-5">
                  <Skeleton className="h-4 w-24 mb-3" />
                  <Skeleton className="h-8 w-16 mb-2" />
                  <Skeleton className="h-3 w-32" />
                </CardContent>
              </Card>
            ))
          : statsCards.map((card, index) => (
              <Card key={index} className="stat-card border-0 shadow-sm bg-white">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 mt-2">
                        بياناتك فقط
                      </span>
                    </div>
                    <div className={`${card.color} p-3 rounded-xl`}>
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
      </div>

      {!error && (
        <Card className="border-0 shadow-sm mt-6">
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-lg font-bold">حركات مخزون حديثة</CardTitle>
                <p className="text-sm text-gray-500 mt-1">آخر 5 حركات لمخزونك</p>
              </div>
              <CsvButton
                columns={[
                  { key: 'date', label: 'التاريخ/الوقت' },
                  { key: 'type', label: 'نوع الحركة' },
                  { key: 'sku', label: 'SKU' },
                  { key: 'change', label: 'تغير الكمية' },
                  { key: 'reference', label: 'المرجع' },
                ]}
                data={recentRows}
                getRow={(r) => [r.date, r.type, r.sku, r.change, r.reference]}
                filename="recent-movements"
                disabled={loading}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      التاريخ/الوقت
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      نوع الحركة
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">SKU</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      تغير الكمية
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">المرجع</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && !data ? (
                    <tr>
                      <td colSpan={5} className="py-8">
                        <Skeleton className="h-10 w-full" />
                      </td>
                    </tr>
                  ) : recentRows.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-sm text-gray-500">
                        لا توجد حركات حديثة.
                      </td>
                    </tr>
                  ) : (
                    recentRows.map((row, index) => (
                      <tr
                        key={`${row.date}-${row.sku}-${index}`}
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">{row.date}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${row.typeColor}`}
                          >
                            {row.type}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                          {row.sku}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`text-sm font-medium ${
                              row.change.startsWith('+') ? 'text-green-600' : 'text-rose-600'
                            }`}
                          >
                            {row.change}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">{row.reference}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
