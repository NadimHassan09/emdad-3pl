import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CheckCheck, List, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  fetchUnreadNotifications,
  markAllNotificationsRead,
  getNotificationsErrorMessage,
  type ClientNotification,
} from '@/api/clientPortalNotifications';

function formatTime(iso: string): string {
  try {
    const d = new Date(iso);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'الآن';
    if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `منذ ${diffHours} ساعة`;
    const diffDays = Math.floor(diffHours / 24);
    return `منذ ${diffDays} يوم`;
  } catch {
    return '';
  }
}

export function NotificationsDropdown() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<ClientNotification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clearing, setClearing] = useState(false);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUnreadNotifications(5);
      setNotifications(data);
    } catch (e) {
      console.error(e);
      setError(getNotificationsErrorMessage(e));
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (open) void load();
  }, [open, load]);

  const handleClearAll = async () => {
    try {
      setClearing(true);
      setError(null);
      await markAllNotificationsRead();
      setNotifications([]);
    } catch (e) {
      setError(getNotificationsErrorMessage(e));
    } finally {
      setClearing(false);
    }
  };

  const handleViewAll = () => {
    setOpen(false);
    navigate('/notifications');
  };

  const unreadCount = notifications.length;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors"
          aria-label="الإشعارات"
        >
          <Bell className="w-5 h-5 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 min-w-[18px] h-[18px] flex items-center justify-center px-1 bg-red-500 text-white text-xs font-medium rounded-full">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 sm:w-96 p-0" sideOffset={8}>
        <div className="border-b border-gray-100 px-4 py-3">
          <h3 className="font-semibold text-gray-900">الإشعارات</h3>
        </div>
        <div className="max-h-[320px] overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
          ) : error ? (
            <div className="px-4 py-6 text-center text-sm text-red-600">
              {error}
            </div>
          ) : notifications.length === 0 ? (
            <div className="px-4 py-12 text-center text-sm text-gray-500">
              لا توجد إشعارات غير مقروءة
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="px-4 py-3 hover:bg-gray-50/80 transition-colors text-right"
                >
                  <p className="text-sm font-medium text-gray-900 line-clamp-2">
                    {n.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {n.messagePreview || n.fullMessage}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatTime(n.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-gray-100 p-2 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={handleClearAll}
            disabled={clearing || notifications.length === 0}
          >
            {clearing ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <CheckCheck className="w-4 h-4" />
            )}
            تعليم الكل كمقروء
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={handleViewAll}
          >
            <List className="w-4 h-4" />
            عرض الكل
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
