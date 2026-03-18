const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:3000';

export interface ApiError extends Error {
  status?: number;
  body?: unknown;
}

export async function apiFetch<T = any>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('authToken')
      : null;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const text = await res.text();
  let body: unknown = null;

  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }

  if (!res.ok) {
    // Handle 401 Unauthorized - token expired or invalid
    if (res.status === 401) {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('authToken');
        // Redirect to login only if not already on root (avoids redundant reload and redirect loops)
        const path = window.location.pathname;
        if (path !== '/' && path !== '') {
          window.location.href = '/';
        }
      }
    }
    
    const message =
      res.status === 500 && body && typeof body === 'object' && 'message' in body
        ? String((body as { message: unknown }).message)
        : res.status === 500
          ? 'خطأ في الخادم — تحقق من اتصال قاعدة البيانات وسجلات الخادم'
          : 'API request failed';
    const err: ApiError = new Error(message);
    err.status = res.status;
    err.body = body;
    throw err;
  }

  return body as T;
}

export function setAuthToken(token: string | null) {
  if (typeof window === 'undefined') return;
  if (token) {
    window.localStorage.setItem('authToken', token);
  } else {
    window.localStorage.removeItem('authToken');
  }
}


