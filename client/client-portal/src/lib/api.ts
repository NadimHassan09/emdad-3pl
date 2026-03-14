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
      ? window.localStorage.getItem('clientAuthToken')
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
    const err: ApiError = new Error('API request failed');
    err.status = res.status;
    err.body = body;
    throw err;
  }

  return body as T;
}

export function setClientAuthToken(token: string | null) {
  if (typeof window === 'undefined') return;
  if (token) {
    window.localStorage.setItem('clientAuthToken', token);
  } else {
    window.localStorage.removeItem('clientAuthToken');
  }
}


