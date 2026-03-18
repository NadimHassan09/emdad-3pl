import { apiFetch, type ApiError } from '@/lib/api';

const BASE = '/client-portal/notifications';

export type NotificationImportance = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type NotificationReadStatus = 'UNREAD' | 'READ';

export interface ClientNotification {
  id: string;
  createdAt: string;
  importance: NotificationImportance;
  title: string;
  messagePreview: string;
  fullMessage: string;
  referenceType: string;
  referenceId: string;
  readStatus: NotificationReadStatus;
}

export interface NotificationsQuery {
  importance?: NotificationImportance;
  readStatus?: NotificationReadStatus;
  referenceType?: string;
  dateFrom?: string;
  dateTo?: string;
}

export async function fetchClientNotifications(params: NotificationsQuery = {}): Promise<ClientNotification[]> {
  const sp = new URLSearchParams();
  if (params.importance) sp.set('importance', params.importance);
  if (params.readStatus) sp.set('readStatus', params.readStatus);
  if (params.referenceType) sp.set('referenceType', params.referenceType);
  if (params.dateFrom) sp.set('dateFrom', params.dateFrom);
  if (params.dateTo) sp.set('dateTo', params.dateTo);
  const q = sp.toString();
  return apiFetch<ClientNotification[]>(q ? `${BASE}?${q}` : BASE);
}

export async function markNotificationRead(id: string): Promise<{ id: string; readStatus: NotificationReadStatus }> {
  return apiFetch<{ id: string; readStatus: NotificationReadStatus }>(
    `${BASE}/${encodeURIComponent(id)}/read`,
    { method: 'PATCH' },
  );
}

function bodyMessage(body: unknown): string | undefined {
  if (body && typeof body === 'object' && 'message' in body) {
    const m = (body as { message: unknown }).message;
    if (typeof m === 'string') return m;
    if (Array.isArray(m) && typeof m[0] === 'string') return m[0];
  }
  return undefined;
}

export function getNotificationsErrorMessage(err: unknown): string {
  const e = err as ApiError;
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) return bodyMessage(e.body) || 'غير مصرح لك بالوصول.';
  return bodyMessage(e.body) || 'تعذر تحميل الإشعارات. يرجى المحاولة مرة أخرى.';
}

export function importanceToAr(i: NotificationImportance): string {
  switch (i) {
    case 'CRITICAL':
      return 'حرج';
    case 'HIGH':
      return 'مرتفع';
    case 'MEDIUM':
      return 'متوسط';
    case 'LOW':
    default:
      return 'منخفض';
  }
}

export function arToImportance(ar: string): NotificationImportance | undefined {
  switch (ar) {
    case 'حرج':
      return 'CRITICAL';
    case 'مرتفع':
      return 'HIGH';
    case 'متوسط':
      return 'MEDIUM';
    case 'منخفض':
      return 'LOW';
    default:
      return undefined;
  }
}

export function readStatusToAr(s: NotificationReadStatus): string {
  return s === 'READ' ? 'مقروء' : 'غير مقروء';
}

export function arToReadStatus(ar: string): NotificationReadStatus | undefined {
  if (ar === 'مقروء') return 'READ';
  if (ar === 'غير مقروء') return 'UNREAD';
  return undefined;
}
