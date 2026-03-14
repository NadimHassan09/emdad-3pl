import { apiFetch, setClientAuthToken } from './api';
import type { ApiError } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: {
    actorId: string;
    actorType: string;
    sub: string;
    clientId?: string;
    role: string;
    permissions: string[];
    type: string;
  };
}

export interface UserInfo {
  actorId: string;
  actorType: string;
  sub: string;
  clientId?: string;
  role: string;
  permissions: string[];
  type: string;
}

/**
 * Login as client account
 */
export async function loginClient(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await apiFetch<AuthResponse>('/auth/client/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    setClientAuthToken(response.accessToken);
    return response;
  } catch (error) {
    const apiError = error as ApiError;
    throw new Error(
      apiError.body && typeof apiError.body === 'object' && 'message' in apiError.body
        ? (apiError.body.message as string)
        : 'Login failed. Please check your credentials.',
    );
  }
}

/**
 * Get current user info
 */
export async function getCurrentUser(): Promise<UserInfo | null> {
  try {
    const token =
      typeof window !== 'undefined' ? window.localStorage.getItem('clientAuthToken') : null;
    if (!token) return null;
    return await apiFetch<UserInfo>('/auth/me');
  } catch {
    return null;
  }
}

/**
 * Logout current user
 */
export function logout(): void {
  setClientAuthToken(null);
  window.location.href = '/';
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return !!window.localStorage.getItem('clientAuthToken');
}

