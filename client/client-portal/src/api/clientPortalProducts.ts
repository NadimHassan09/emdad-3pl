import { apiFetch, type ApiError } from '@/lib/api';

const MY_PRODUCTS = '/products/my';
const CREATE = '/products/client-portal';
const UPDATE = (id: string) => `/products/client-portal/${id}`;
const DELETE = (id: string) => `/products/${id}`;
const UOM_LIST = '/uom';

export interface MyProduct {
  id: string;
  sku: string;
  name: string;
  description?: string | null;
  price?: number | string | null;
  defaultUom?: { id: string; code: string; name: string };
  minThreshold?: number | string | null;
  isActive?: boolean;
}

export interface UomOption {
  id: string;
  code: string;
  name: string;
}

export async function fetchMyProducts(): Promise<MyProduct[]> {
  return apiFetch<MyProduct[]>(MY_PRODUCTS);
}

export async function createProduct(body: {
  name: string;
  sku: string;
  price?: number;
  description?: string;
  defaultUomId: string;
}): Promise<MyProduct> {
  return apiFetch<MyProduct>(CREATE, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function updateProduct(
  id: string,
  body: {
    name?: string;
    sku?: string;
    price?: number;
    description?: string;
    defaultUomId?: string;
  },
): Promise<MyProduct> {
  return apiFetch<MyProduct>(UPDATE(id), {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

export async function deleteProduct(id: string): Promise<{ success: boolean }> {
  return apiFetch<{ success: boolean }>(DELETE(id), {
    method: 'DELETE',
  });
}

export async function fetchUomList(): Promise<UomOption[]> {
  const list = await apiFetch<UomOption[]>(UOM_LIST);
  return Array.isArray(list) ? list : [];
}

function messageFromBody(body: unknown): string | undefined {
  if (body && typeof body === 'object' && 'message' in body) {
    const m = (body as { message: unknown }).message;
    if (typeof m === 'string') return m;
    if (Array.isArray(m) && typeof m[0] === 'string') return m[0];
  }
  return undefined;
}

export function getProductsErrorMessage(err: unknown, fallback: string): string {
  const e = err as ApiError;
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) return messageFromBody(e.body) || 'غير مصرح لك بالوصول.';
  return messageFromBody(e.body) || fallback;
}
