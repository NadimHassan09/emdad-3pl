import { apiFetch } from './api';

export interface UserRoleInfo {
  id: string;
  roleName: string;
}

export interface UserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  internalRole?: { id: string; roleName: string } | null;
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
  isActive?: boolean;
  password?: string;
}

export async function fetchUserRoles(): Promise<UserRoleInfo[]> {
  return apiFetch<UserRoleInfo[]>('/users/roles');
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
