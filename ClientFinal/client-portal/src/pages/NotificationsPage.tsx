import { useState, useEffect, useCallback } from 'react';
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCw, Trash2 } from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
import {
  fetchClientNotifications,
  markNotificationRead,
  deleteNotification,
  getNotificationsErrorMessage,
  importanceToAr,
  arToImportance,
  readStatusToAr,
  arToReadStatus,
  type ClientNotification,
} from '@/api/clientPortalNotifications';
import { formatDateTimeEn } from '@/lib/dateFormat';

function importanceBadgeClass(ar: string) {
  switch (ar) {
    case 'حرج':
      return 'bg-red-100 text-red-700';
    case 'مرتفع':
      return 'bg-orange-100 text-orange-700';
    case 'متوسط':
      return 'bg-blue-100 text-blue-700';
    case 'منخفض':
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function NotificationsPage({
  onNavigateToReference,
}: {
  onNavigateToReference: (referenceType: string, referenceId: string) => void;
}) {
  const [importance, setImportance] = useState('');
  const [readStatus, setReadStatus] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [referenceType, setReferenceType] = useState('__all__');

  const [notifications, setNotifications] = useState<ClientNotification[]>([]);
  const [selected, setSelected] = useState<ClientNotification | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const apiImportance = importance ? arToImportance(importance) : undefined;
      const apiRead = readStatus ? arToReadStatus(readStatus) : undefined;
      const data = await fetchClientNotifications({
        ...(apiImportance ? { importance: apiImportance } : {}),
        ...(apiRead ? { readStatus: apiRead } : {}),
        ...(referenceType && referenceType !== '__all__' ? { referenceType } : {}),
        ...(dateFrom ? { dateFrom } : {}),
        ...(dateTo ? { dateTo } : {}),
      });
      setNotifications(data);
    } catch (e) {
      console.error(e);
      setError(getNotificationsErrorMessage(e));
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  }, [importance, readStatus, referenceType, dateFrom, dateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  const handleMarkAsRead = async (id: string) => {
    try {
      await markNotificationRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, readStatus: 'READ' } : n)),
      );
      setSelected(null);
    } catch (e) {
      console.error(e);
      setError(getNotificationsErrorMessage(e));
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteNotification(id);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setSelected(null);
    } catch (e) {
      console.error(e);
      setError(getNotificationsErrorMessage(e));
    }
  };

  const handleGoToReference = (n: ClientNotification) => {
    setSelected(null);
    onNavigateToReference(n.referenceType, n.referenceId);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">الإشعارات</h1>
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
              { key: 'createdAt', label: 'وقت الإنشاء' },
              { key: 'importance', label: 'الأهمية' },
              { key: 'title', label: 'العنوان' },
              { key: 'referenceType', label: 'نوع المرجع' },
              { key: 'referenceId', label: 'معرف المرجع' },
              { key: 'readStatus', label: 'القراءة' },
            ]}
            data={notifications}
            getRow={(n) => [
              formatDateTimeEn(n.createdAt),
              importanceToAr(n.importance),
              n.title,
              n.referenceType || '-',
              n.referenceId || '-',
              readStatusToAr(n.readStatus),
            ]}
            filename="notifications"
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

      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">الأهمية</label>
              <Select value={importance} onValueChange={setImportance}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر الأهمية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="منخفض">منخفض</SelectItem>
                  <SelectItem value="متوسط">متوسط</SelectItem>
                  <SelectItem value="مرتفع">مرتفع</SelectItem>
                  <SelectItem value="حرج">حرج</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">حالة القراءة</label>
              <Select value={readStatus} onValueChange={setReadStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر الحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="غير مقروء">غير مقروء</SelectItem>
                  <SelectItem value="مقروء">مقروء</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">من</label>
              <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">إلى</label>
              <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">نوع المرجع</label>
              <Select value={referenceType} onValueChange={setReferenceType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="الكل" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__all__">الكل</SelectItem>
                  <SelectItem value="طلب وارد">طلب وارد</SelectItem>
                  <SelectItem value="طلب صادر">طلب صادر</SelectItem>
                  <SelectItem value="فاتورة">فاتورة</SelectItem>
                  <SelectItem value="تقارير">تقارير</SelectItem>
                </SelectContent>
              </Select>
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
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">وقت الإنشاء</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الأهمية</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">العنوان</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">نوع المرجع</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">معرف المرجع</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">القراءة</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="py-10 px-4">
                      <Skeleton className="h-24 w-full rounded-lg" />
                    </td>
                  </tr>
                ) : notifications.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-10 text-center text-sm text-gray-500">
                      لا توجد إشعارات.
                    </td>
                  </tr>
                ) : (
                  notifications.map((n) => {
                    const impAr = importanceToAr(n.importance);
                    const readAr = readStatusToAr(n.readStatus);
                    return (
                      <tr
                        key={n.id}
                        className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${
                          n.readStatus === 'UNREAD' ? 'bg-blue-50/30' : ''
                        }`}
                      >
                        <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                          {formatDateTimeEn(n.createdAt)}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${importanceBadgeClass(impAr)}`}
                          >
                            {impAr}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-900 font-medium">{n.title}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{n.referenceType}</td>
                        <td className="py-4 px-4 text-sm text-gray-900 font-mono">{n.referenceId}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              n.readStatus === 'READ'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {readAr}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelected(n)}
                              className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10"
                            >
                              عرض
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => void handleDelete(n.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
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

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription className="text-right">
                  {formatDateTimeEn(selected.createdAt)}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">الأهمية</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${importanceBadgeClass(
                      importanceToAr(selected.importance),
                    )}`}
                  >
                    {importanceToAr(selected.importance)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">نوع المرجع</p>
                  <p className="text-sm text-gray-900">{selected.referenceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">معرف المرجع</p>
                  <p className="text-sm font-mono text-gray-900">{selected.referenceId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">الرسالة</p>
                  <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg">
                    {selected.fullMessage}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleGoToReference(selected)}
                    className="text-[#176C33] border-[#176C33]/40 hover:bg-[#176C33]/5"
                  >
                    الانتقال إلى التفاصيل
                  </Button>
                  {selected.readStatus === 'UNREAD' && (
                    <Button type="button" onClick={() => void handleMarkAsRead(selected.id)}>
                      تعليم كمقروء
                    </Button>
                  )}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => void handleDelete(selected.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 ml-1" />
                  حذف
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
