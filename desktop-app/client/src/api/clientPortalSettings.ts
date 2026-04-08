import { apiFetch, type ApiError } from '@/lib/api';

const BASE = '/client-settings';

export interface ClientSettingsMe {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
  };
  preferences: {
    language: string;
    timezone: string;
    notificationsEnabled: boolean;
  };
  security: {
    twoFactorEnabled: boolean;
    activeSessions: number;
  };
}

export async function fetchClientSettings(): Promise<ClientSettingsMe> {
  return apiFetch<ClientSettingsMe>(`${BASE}/me`);
}

export async function updateClientProfile(body: {
  firstName?: string;
  lastName?: string;
  email?: string;
}): Promise<{ profile: ClientSettingsMe['profile'] }> {
  return apiFetch(`${BASE}/me/profile`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

export async function changeClientPassword(body: {
  currentPassword: string;
  newPassword: string;
}): Promise<{ success: boolean }> {
  return apiFetch(`${BASE}/me/password`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

export async function updateClientPreferences(body: {
  language?: string;
  timezone?: string;
  notificationsEnabled?: boolean;
}): Promise<{
  preferences: ClientSettingsMe['preferences'];
  security: ClientSettingsMe['security'];
}> {
  return apiFetch(`${BASE}/me/preferences`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

function messageFromBody(body: unknown): string | undefined {
  if (body && typeof body === 'object' && 'message' in body) {
    const m = (body as { message: unknown }).message;
    if (typeof m === 'string') return m;
    if (Array.isArray(m) && typeof m[0] === 'string') return m[0];
  }
  return undefined;
}

export function getSettingsErrorMessage(err: unknown, fallback: string): string {
  const e = err as ApiError;
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) return messageFromBody(e.body) || 'غير مصرح لك بالوصول.';
  return messageFromBody(e.body) || fallback;
}
