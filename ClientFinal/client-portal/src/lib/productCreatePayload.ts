import type { CreateProductPayload } from '@/api/clientPortalProducts';

const DEFAULT_WEIGHT = 0;
const DEFAULT_DIM = 0;
const DEFAULT_UNITS_PER_CARTON = 1;

export type ProductCreateFieldStrings = {
  createName: string;
  createDescription: string;
  createCategory: string;
  createBrand: string;
  createWeight: string;
  createLength: string;
  createWidth: string;
  createHeight: string;
  createUnitsPerCarton: string;
  createUomId: string;
  createBarcode: string;
  createIsSerialized: boolean;
  createIsBatchTracked: boolean;
  createRequiresExpiryDate: boolean;
  createMinThreshold: string;
  createReorderPoint: string;
  createDeclaredValue: string;
  createPrice: string;
};

/**
 * Validates required product fields and builds API payload.
 * Shipping dimensions / weight / units-per-carton are optional in the UI;
 * empty values map to safe defaults for the existing API shape.
 */
export function buildCreateProductPayload(
  f: ProductCreateFieldStrings,
): { ok: true; payload: CreateProductPayload } | { ok: false; error: string } {
  if (!f.createName.trim() || !f.createUomId) {
    return { ok: false, error: 'الاسم ووحدة القياس مطلوبة.' };
  }

  const w = f.createWeight.trim() ? parseFloat(f.createWeight) : DEFAULT_WEIGHT;
  if (Number.isNaN(w) || w < 0) {
    return { ok: false, error: 'الوزن يجب أن يكون 0 أو أكثر.' };
  }

  const len = f.createLength.trim() ? parseFloat(f.createLength) : DEFAULT_DIM;
  const wid = f.createWidth.trim() ? parseFloat(f.createWidth) : DEFAULT_DIM;
  const h = f.createHeight.trim() ? parseFloat(f.createHeight) : DEFAULT_DIM;
  for (const [n, label] of [
    [len, 'الطول'],
    [wid, 'العرض'],
    [h, 'الارتفاع'],
  ] as const) {
    if (Number.isNaN(n) || n < 0) {
      return { ok: false, error: `${label} يجب أن يكون 0 أو أكثر.` };
    }
  }

  const upc = f.createUnitsPerCarton.trim()
    ? parseInt(f.createUnitsPerCarton, 10)
    : DEFAULT_UNITS_PER_CARTON;
  if (Number.isNaN(upc) || upc < 1) {
    return { ok: false, error: 'الوحدات لكل كرتون يجب أن تكون 1 أو أكثر عند إدخالها.' };
  }

  const minTh = f.createMinThreshold.trim() ? parseFloat(f.createMinThreshold) : undefined;
  const reorder = f.createReorderPoint.trim() ? parseFloat(f.createReorderPoint) : undefined;
  if (f.createMinThreshold.trim() && (minTh == null || Number.isNaN(minTh) || minTh < 0)) {
    return { ok: false, error: 'حد التنبيه يجب أن يكون 0 أو أكثر.' };
  }
  if (f.createReorderPoint.trim() && (reorder == null || Number.isNaN(reorder) || reorder < 0)) {
    return { ok: false, error: 'نقطة إعادة الطلب يجب أن تكون 0 أو أكثر.' };
  }

  const declared = f.createDeclaredValue.trim() ? parseFloat(f.createDeclaredValue) : undefined;
  const priceVal = f.createPrice.trim() ? parseFloat(f.createPrice) : undefined;
  if (f.createDeclaredValue.trim() && (declared == null || Number.isNaN(declared) || declared < 0)) {
    return { ok: false, error: 'القيمة المعلنة غير صالحة.' };
  }
  if (f.createPrice.trim() && (priceVal == null || Number.isNaN(priceVal) || priceVal < 0)) {
    return { ok: false, error: 'سعر البيع غير صالح.' };
  }

  const payload: CreateProductPayload = {
    name: f.createName.trim(),
    description: f.createDescription.trim() || undefined,
    category: f.createCategory.trim() || undefined,
    brand: f.createBrand.trim() || undefined,
    weight: w,
    length: len,
    width: wid,
    height: h,
    unitsPerCarton: upc,
    defaultUomId: f.createUomId,
    barcode: f.createBarcode.trim() || undefined,
    isSerialized: f.createIsSerialized,
    isBatchTracked: f.createIsBatchTracked,
    requiresExpiryDate: f.createRequiresExpiryDate,
    minThreshold: minTh != null && !Number.isNaN(minTh) ? minTh : undefined,
    reorderPoint: reorder != null && !Number.isNaN(reorder) ? reorder : undefined,
    declaredValue: declared != null && !Number.isNaN(declared) ? declared : undefined,
    price: priceVal != null && !Number.isNaN(priceVal) ? priceVal : undefined,
  };

  return { ok: true, payload };
}
