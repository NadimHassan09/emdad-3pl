function buildApiUrl(path: string): string {
  const base = (
    import.meta.env.VITE_API_URL || 'http://127.0.0.1:3000'
  ).replace(/\/+$/, '');
  const pathStr = path.startsWith('/') ? path : `/${path}`;
  return `${base}${pathStr}`;
}

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

  const res = await fetch(buildApiUrl(path), {
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


