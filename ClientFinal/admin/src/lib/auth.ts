import { apiFetch, setAuthToken } from './api';
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
    role: string;
    permissions: string[];
    type: string;
  };
}

export interface UserInfo {
  actorId: string;
  actorType: string;
  sub: string;
  role: string;
  permissions: string[];
  type: string;
}

/**
 * Login as staff member
 */
export async function loginStaff(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await apiFetch<AuthResponse>('/auth/staff/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    setAuthToken(response.accessToken);
    return response;
  } catch (error) {
    const apiError = error as ApiError;
    const message =
      apiError.body && typeof apiError.body === 'object' && 'message' in apiError.body
        ? (apiError.body.message as string)
        : null;
    if (message) throw new Error(message);
    // Network error (e.g. ERR_CONNECTION_REFUSED = backend not running)
    const isNetworkError =
      error instanceof TypeError &&
      (error.message === 'Failed to fetch' || error.message.includes('fetch'));
    if (isNetworkError) {
      throw new Error(
        'Cannot reach the server. Make sure the backend is running (e.g. npm run start:dev in the server folder) and that VITE_API_URL points to it.',
      );
    }
    throw new Error('Login failed. Please check your credentials.');
  }
}

/**
 * Get current user info
 */
export async function getCurrentUser(): Promise<UserInfo | null> {
  try {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('authToken') : null;
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
  setAuthToken(null);
  window.location.href = '/';
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return !!window.localStorage.getItem('authToken');
}

