import { useState, useEffect, useCallback } from 'react';
import {
  Package,
  TrendingUp,
  ArrowDown,
  ArrowUp,
  Activity,
  MoreHorizontal,
  Download,
  RefreshCw,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  fetchClientPortalDashboard,
  getDashboardErrorMessage,
  type ClientPortalDashboardResponse,
} from '@/api/clientPortalDashboard';
import { assignStockColors, computeMovementMonthOverMonthPercent } from './dashboardUtils';

function mapRecentMovements(
  entries: ClientPortalDashboardResponse['recentMovements'],
) {
  return entries.map((entry) => ({
    date: entry.date ? new Date(entry.date).toLocaleString('ar-SA') : '',
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
  const [stockDistribution, setStockDistribution] = useState<
    { name: string; value: number; color: string }[]
  >([]);
  const [recentRows, setRecentRows] = useState<ReturnType<typeof mapRecentMovements>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const dashboard = await fetchClientPortalDashboard();
      setData(dashboard);
      setStockDistribution(assignStockColors(dashboard.stockDistribution));
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
  const movementByMonth = data?.movementByMonth ?? [];
  const weeklyTrend = data?.weeklyTrend ?? [];
  const mom = data ? computeMovementMonthOverMonthPercent(data.movementByMonth) : null;

  const statsCards = [
    { title: 'إجمالي المنتجات', value: stats.totalProducts, icon: Package, color: 'bg-blue-500' },
    {
      title: 'إجمالي المخزون',
      value: stats.totalStock.toLocaleString('ar-SA'),
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
          <Button className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2">
            <Download className="w-4 h-4" />
            تصدير التقرير
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">حركات المخزون</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {loading && !data ? (
                <Skeleton className="h-[300px] w-full rounded-lg" />
              ) : movementByMonth.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-16">لا توجد حركات في الأشهر الأخيرة.</p>
              ) : (
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={movementByMonth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '12px',
                        }}
                      />
                      <Bar dataKey="inbound" name="وارد" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="outbound" name="صادر" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold">توزيع المخزون حسب المنتج</CardTitle>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {loading && !data ? (
                <Skeleton className="h-[300px] w-full rounded-lg" />
              ) : stockDistribution.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-16">لا يوجد مخزون مسجل لمنتجاتك.</p>
              ) : (
                <div className="chart-container flex items-center justify-center min-h-[300px]">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={stockDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {stockDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {!error && (
        <Card className="border-0 shadow-sm mt-6">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <CardTitle className="text-lg font-bold">إحصائيات الأداء</CardTitle>
              <div className="flex items-center gap-2">
                {mom ? (
                  <Badge
                    variant="secondary"
                    className={
                      mom.percent >= 0
                        ? 'bg-green-100 text-green-700'
                        : 'bg-rose-100 text-rose-700'
                    }
                  >
                    {mom.label}
                  </Badge>
                ) : !loading || data ? (
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                    غير متاح — بيانات الشهر السابق
                  </Badge>
                ) : null}
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading && !data ? (
              <Skeleton className="h-[250px] w-full rounded-lg" />
            ) : weeklyTrend.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-12">لا توجد بيانات أسبوعية كافية.</p>
            ) : (
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={weeklyTrend}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {!error && (
        <Card className="border-0 shadow-sm mt-6">
          <CardHeader className="pb-2">
            <div>
              <CardTitle className="text-lg font-bold">حركات مخزون حديثة</CardTitle>
              <p className="text-sm text-gray-500 mt-1">آخر 5 حركات لمخزونك</p>
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
