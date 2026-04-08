import { apiFetch } from './api';

export interface UserRoleInfo {
  id: string;
  roleName: string;
}

export interface UserRoleWithPermissions extends UserRoleInfo {
  permissionsJson?: { permissions?: string[] } | string[];
}

export interface CreateRolePayload {
  roleName: string;
  permissions?: string[];
}

export interface UpdateRolePayload {
  roleName?: string;
  permissions?: string[];
}

/** Permission keys and labels for role management (Arabic). */
export const PERMISSION_OPTIONS: { value: string; label: string }[] = [
  { value: 'dashboard:view', label: 'لوحة التحكم - عرض' },
  { value: 'users:view', label: 'المستخدمين - عرض' },
  { value: 'users:manage', label: 'المستخدمين - إدارة' },
  { value: 'warehouses:view', label: 'المستودعات - عرض' },
  { value: 'warehouses:manage', label: 'المستودعات - إدارة' },
  { value: 'products:view', label: 'المنتجات - عرض' },
  { value: 'products:manage', label: 'المنتجات - إدارة' },
  { value: 'inventory:view', label: 'المخزون - عرض' },
  { value: 'inventory:manage', label: 'المخزون - إدارة' },
  { value: 'inbound:view', label: 'الطلبات الواردة - عرض' },
  { value: 'inbound:manage', label: 'الطلبات الواردة - إدارة' },
  { value: 'outbound:view', label: 'الطلبات الصادرة - عرض' },
  { value: 'outbound:manage', label: 'الطلبات الصادرة - إدارة' },
  { value: 'returns:view', label: 'المرتجعات - عرض' },
  { value: 'returns:manage', label: 'المرتجعات - إدارة' },
  { value: 'adjustments:view', label: 'التسويات - عرض' },
  { value: 'adjustments:manage', label: 'التسويات - إدارة' },
  { value: 'reports:view', label: 'التقارير - عرض' },
  { value: 'billing:view', label: 'الفواتير - عرض' },
  { value: 'billing:manage', label: 'الفواتير - إدارة' },
  { value: 'approvals:view', label: 'الموافقات - عرض' },
  { value: 'approvals:manage', label: 'الموافقات - إدارة' },
  { value: 'vas:view', label: 'الخدمات الإضافية - عرض' },
  { value: 'vas:manage', label: 'الخدمات الإضافية - إدارة' },
  { value: 'work_orders:view', label: 'أوامر العمل - عرض' },
  { value: 'work_orders:manage', label: 'أوامر العمل - إدارة' },
];

export interface UserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  internalRole?: { id: string; roleName: string } | null;
  warehouse?: { id: string; code: string; name: string } | null;
}

export interface WarehouseResponse {
  id: string;
  code: string;
  name: string;
}

export interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  internalRoleId?: string | null;
  warehouseId?: string | null;
  isActive?: boolean;
  password?: string;
}

export async function fetchUserRoles(): Promise<UserRoleInfo[]> {
  return apiFetch<UserRoleInfo[]>('/users/roles');
}

export async function fetchRolesWithPermissions(): Promise<UserRoleWithPermissions[]> {
  return apiFetch<UserRoleWithPermissions[]>('/users/roles/with-permissions');
}

export async function createRole(payload: CreateRolePayload): Promise<UserRoleWithPermissions> {
  return apiFetch<UserRoleWithPermissions>('/users/roles', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateRole(
  roleId: string,
  payload: UpdateRolePayload,
): Promise<UserRoleWithPermissions> {
  return apiFetch<UserRoleWithPermissions>(`/users/roles/${roleId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function fetchWarehouses(): Promise<WarehouseResponse[]> {
  return apiFetch<WarehouseResponse[]>('/warehouses');
}

export async function fetchUsers(): Promise<UserResponse[]> {
  return apiFetch<UserResponse[]>('/users');
}

export async function updateUser(id: string, payload: UpdateUserPayload): Promise<UserResponse> {
  return apiFetch<UserResponse>(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}
