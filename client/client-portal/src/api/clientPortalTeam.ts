import { apiFetch, type ApiError } from '@/lib/api';

const BASE = '/client-portal/team';

export interface TeamRole {
  id: string;
  roleName: string;
}

export interface TeamAccountRow {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  clientRoleId: string;
  roleName: string;
  createdAt: string;
}

export async function fetchTeamRoles(): Promise<TeamRole[]> {
  return apiFetch<TeamRole[]>(`${BASE}/roles`);
}

export async function fetchTeamAccounts(params: {
  isActive?: boolean;
  clientRoleId?: string;
  search?: string;
}): Promise<TeamAccountRow[]> {
  const sp = new URLSearchParams();
  if (params.isActive === true) sp.set('isActive', 'true');
  if (params.isActive === false) sp.set('isActive', 'false');
  if (params.clientRoleId) sp.set('clientRoleId', params.clientRoleId);
  if (params.search?.trim()) sp.set('search', params.search.trim());
  const q = sp.toString();
  return apiFetch<TeamAccountRow[]>(q ? `${BASE}/accounts?${q}` : `${BASE}/accounts`);
}

export async function inviteTeamAccount(body: {
  firstName: string;
  lastName: string;
  email: string;
  clientRoleId: string;
}): Promise<{ account: TeamAccountRow; temporaryPassword: string }> {
  return apiFetch(`${BASE}/accounts`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function updateTeamAccount(
  id: string,
  body: Partial<{
    firstName: string;
    lastName: string;
    email: string;
    clientRoleId: string;
  }>,
): Promise<TeamAccountRow> {
  return apiFetch(`${BASE}/accounts/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

export async function setTeamAccountActive(id: string, isActive: boolean): Promise<{ id: string; isActive: boolean }> {
  return apiFetch(`${BASE}/accounts/${encodeURIComponent(id)}/active`, {
    method: 'PATCH',
    body: JSON.stringify({ isActive }),
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

export function getTeamErrorMessage(err: unknown, fallback = 'حدث خطأ. حاول مرة أخرى.'): string {
  const e = err as ApiError;
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) {
    return messageFromBody(e.body) || 'غير مصرح لك بتنفيذ هذا الإجراء.';
  }
  if (e?.status === 404) return 'المستخدم غير موجود.';
  if (e?.status === 409) {
    return messageFromBody(e.body) || 'البريد الإلكتروني مستخدم مسبقاً.';
  }
  return messageFromBody(e.body) || fallback;
}
