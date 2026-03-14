const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3000';

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
      // Clear invalid token
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('authToken');
      }
      // Redirect to login page
      if (typeof window !== 'undefined' && !window.location.pathname.includes('login')) {
        window.location.href = '/';
      }
    }
    
    const err: ApiError = new Error('API request failed');
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


