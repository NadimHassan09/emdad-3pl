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
  category?: string | null;
  brand?: string | null;
  price?: number | string | null;
  declaredValue?: number | string | null;
  defaultUom?: { id: string; code: string; name: string };
  weight?: number | string | null;
  lengthCm?: number | string | null;
  widthCm?: number | string | null;
  heightCm?: number | string | null;
  unitsPerCarton?: number | null;
  barcode?: string | null;
  isSerialized?: boolean;
  isBatchTracked?: boolean;
  requiresExpiryDate?: boolean;
  minThreshold?: number | string | null;
  reorderPoint?: number | string | null;
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

export interface CreateProductPayload {
  name: string;
  description?: string;
  category?: string;
  brand?: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  unitsPerCarton: number;
  defaultUomId: string;
  barcode?: string;
  isSerialized?: boolean;
  isBatchTracked?: boolean;
  requiresExpiryDate?: boolean;
  minThreshold?: number;
  reorderPoint?: number;
  declaredValue?: number;
  price?: number;
}

export async function createProduct(body: CreateProductPayload): Promise<MyProduct> {
  return apiFetch<MyProduct>(CREATE, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export interface UpdateProductPayload {
  name?: string;
  sku?: string;
  description?: string;
  category?: string;
  brand?: string;
  weight?: number;
  length?: number;
  width?: number;
  height?: number;
  unitsPerCarton?: number;
  defaultUomId?: string;
  barcode?: string;
  isSerialized?: boolean;
  isBatchTracked?: boolean;
  requiresExpiryDate?: boolean;
  minThreshold?: number;
  reorderPoint?: number;
  declaredValue?: number;
  price?: number;
}

export async function updateProduct(
  id: string,
  body: UpdateProductPayload,
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

function extractMessages(body: unknown): string[] {
  if (!body || typeof body !== 'object') return [];
  const obj = body as Record<string, unknown>;
  if (!('message' in obj)) return [];
  const m = obj.message;
  if (typeof m === 'string') return [m];
  if (Array.isArray(m)) {
    const result: string[] = [];
    for (const item of m) {
      if (typeof item === 'string') {
        result.push(item);
      } else if (item && typeof item === 'object' && 'constraints' in item) {
        const c = (item as { constraints?: Record<string, string> }).constraints;
        if (c) result.push(...Object.values(c));
      }
    }
    return result;
  }
  return [];
}

function messageFromBody(body: unknown): string | undefined {
  const msgs = extractMessages(body);
  return msgs.length > 0 ? msgs[0] : undefined;
}

export function getProductsErrorMessage(err: unknown, fallback: string): string {
  const e = err as ApiError;
  if (e?.status === 401) return 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.';
  if (e?.status === 403) return messageFromBody(e.body) || 'غير مصرح لك بالوصول.';
  if (e?.status === 400) {
    const msgs = extractMessages(e.body);
    if (msgs.length > 0) return msgs.join(' | ');
  }
  return messageFromBody(e.body) || fallback;
}
