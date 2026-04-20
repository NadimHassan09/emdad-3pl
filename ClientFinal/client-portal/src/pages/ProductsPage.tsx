import { useState, useEffect, useCallback } from 'react';
import { Plus, RefreshCw, Pencil, Trash2 } from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { BarcodeInput } from '@/components/BarcodeInput';
import {
  fetchMyProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  fetchUomList,
  getProductsErrorMessage,
  type MyProduct,
  type UomOption,
} from '@/api/clientPortalProducts';

function formatPrice(val: number | string | null | undefined): string {
  if (val == null || val === '') return '-';
  const n = typeof val === 'string' ? parseFloat(val) : val;
  if (Number.isNaN(n)) return '-';
  return n.toLocaleString('ar-SA', { minimumFractionDigits: 2 });
}

export function ProductsPage() {
  const [products, setProducts] = useState<MyProduct[]>([]);
  const [uoms, setUoms] = useState<UomOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [createOpen, setCreateOpen] = useState(false);
  const [createName, setCreateName] = useState('');
  const [createDescription, setCreateDescription] = useState('');
  const [createBrand, setCreateBrand] = useState('');
  const [createUomId, setCreateUomId] = useState('');
  const [createBarcode, setCreateBarcode] = useState('');
  const [createRequiresExpiryDate, setCreateRequiresExpiryDate] = useState(false);
  const [createPrice, setCreatePrice] = useState('');
  const [createSubmitting, setCreateSubmitting] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const [editOpen, setEditOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<MyProduct | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editBrand, setEditBrand] = useState('');
  const [editUomId, setEditUomId] = useState('');
  const [editBarcode, setEditBarcode] = useState('');
  const [editRequiresExpiryDate, setEditRequiresExpiryDate] = useState(false);
  const [editPrice, setEditPrice] = useState('');
  const [editSubmitting, setEditSubmitting] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<MyProduct | null>(null);
  const [deleteSubmitting, setDeleteSubmitting] = useState(false);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [prods, uomList] = await Promise.all([
        fetchMyProducts(),
        fetchUomList(),
      ]);
      setProducts(prods);
      setUoms(uomList);
      if (uomList.length > 0 && !createUomId) {
        setCreateUomId(uomList[0].id);
      }
    } catch (e) {
      console.error(e);
      setError(getProductsErrorMessage(e, 'تعذر تحميل المنتجات.'));
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const openCreate = () => {
    setCreateName('');
    setCreateDescription('');
    setCreateBrand('');
    setCreateUomId(uoms[0]?.id ?? '');
    setCreateBarcode('');
    setCreateRequiresExpiryDate(false);
    setCreatePrice('');
    setCreateError(null);
    setCreateOpen(true);
  };

  const handleCreate = async () => {
    if (!createName.trim() || !createUomId) {
      setCreateError('الاسم ووحدة القياس مطلوبة.');
      return;
    }
    try {
      setCreateSubmitting(true);
      setCreateError(null);
      const priceVal = createPrice ? parseFloat(createPrice) : undefined;
      await createProduct({
        name: createName.trim(),
        description: createDescription.trim() || undefined,
        brand: createBrand.trim() || undefined,
        // Keep client form simple; backend still requires these fields today.
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        unitsPerCarton: 1,
        defaultUomId: createUomId,
        barcode: createBarcode.trim() || undefined,
        requiresExpiryDate: createRequiresExpiryDate,
        price: priceVal != null && !Number.isNaN(priceVal) ? priceVal : undefined,
      });
      setCreateOpen(false);
      void load();
    } catch (e) {
      const apiErr = e as { status?: number; body?: unknown };
      if (apiErr?.body && typeof apiErr.body === 'object' && 'message' in apiErr.body) {
        const msgs = (apiErr.body as { message: unknown }).message;
        if (Array.isArray(msgs)) {
          console.error('[ProductsPage] Validation errors (400):', msgs);
        } else {
          console.error('[ProductsPage] Error response body:', apiErr.body);
        }
      }
      setCreateError(getProductsErrorMessage(e, 'تعذر إضافة المنتج.'));
    } finally {
      setCreateSubmitting(false);
    }
  };

  const openEdit = (p: MyProduct) => {
    setEditProduct(p);
    setEditName(p.name);
    setEditDescription(p.description ?? '');
    setEditBrand(p.brand ?? '');
    setEditUomId(p.defaultUom?.id ?? uoms[0]?.id ?? '');
    setEditBarcode(p.barcode ?? '');
    setEditRequiresExpiryDate(p.requiresExpiryDate ?? false);
    setEditPrice(toNum(p.price));
    setEditError(null);
    setEditOpen(true);
  };

  const handleEdit = async () => {
    if (!editProduct || !editName.trim()) {
      setEditError('اسم المنتج مطلوب.');
      return;
    }
    try {
      setEditSubmitting(true);
      setEditError(null);
      await updateProduct(editProduct.id, {
        name: editName.trim(),
        description: editDescription.trim() || undefined,
        brand: editBrand.trim() || undefined,
        defaultUomId: editUomId || undefined,
        barcode: editBarcode.trim() || undefined,
        requiresExpiryDate: editRequiresExpiryDate,
        price: editPrice ? parseFloat(editPrice) : undefined,
      });
      setEditOpen(false);
      setEditProduct(null);
      void load();
    } catch (e) {
      setEditError(getProductsErrorMessage(e, 'تعذر تحديث المنتج.'));
    } finally {
      setEditSubmitting(false);
    }
  };

  const openDelete = (p: MyProduct) => {
    setDeleteTarget(p);
    setDeleteOpen(true);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      setDeleteSubmitting(true);
      await deleteProduct(deleteTarget.id);
      setDeleteOpen(false);
      setDeleteTarget(null);
      void load();
    } catch (e) {
      setError(getProductsErrorMessage(e, 'تعذر حذف المنتج.'));
    } finally {
      setDeleteSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">المنتجات</h1>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => void load()}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              تحديث
            </Button>
            <CsvButton
              columns={[
                { key: 'sku', label: 'SKU' },
                { key: 'name', label: 'الاسم' },
                { key: 'price', label: 'السعر' },
                { key: 'description', label: 'الوصف' },
                { key: 'uom', label: 'وحدة القياس' },
              ]}
              data={products}
              getRow={(p) => [
                p.sku,
                p.name,
                formatPrice(p.price),
                p.description || '-',
                p.defaultUom?.code ?? '-',
              ]}
              filename="products"
            />
            <Button
              type="button"
              onClick={openCreate}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
            >
              <Plus className="w-4 h-4" />
              إضافة منتج
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>خطأ</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      SKU
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الاسم
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      السعر
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الوصف
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      وحدة القياس
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="py-12 text-center text-sm text-gray-500"
                      >
                        لا توجد منتجات. أضف منتجاً جديداً.
                      </td>
                    </tr>
                  ) : (
                    products.map((p) => (
                      <tr
                        key={p.id}
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-4 text-sm font-mono text-gray-900">
                          {p.sku}
                        </td>
                        <td className="py-4 px-4 text-sm font-medium text-gray-900">
                          {p.name}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {formatPrice(p.price)}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600 max-w-[200px] truncate">
                          {p.description || '-'}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {p.defaultUom?.code ?? '-'}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openEdit(p)}
                              className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10 gap-1"
                            >
                              <Pencil className="w-4 h-4" />
                              تعديل
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openDelete(p)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              حذف
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="flex flex-col h-[85vh] max-h-[85vh] w-[calc(100vw-2rem)] sm:max-w-xl p-0 gap-0 overflow-hidden">
          <DialogHeader className="shrink-0 px-6 pt-6 pb-4 pr-12 border-b border-gray-100">
            <DialogTitle>إضافة منتج جديد</DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
            <div className="space-y-8 px-6 py-5">
              {createError && (
                <Alert variant="destructive">
                  <AlertDescription>{createError}</AlertDescription>
                </Alert>
              )}

              {/* Product Definition */}
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">البيانات الأساسية</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>اسم المنتج *</Label>
                    <Input
                      value={createName}
                      onChange={(e) => setCreateName(e.target.value)}
                      placeholder="اسم المنتج"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>الوصف</Label>
                    <Textarea
                      value={createDescription}
                      onChange={(e) => setCreateDescription(e.target.value)}
                      placeholder="وصف المنتج"
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>العلامة التجارية</Label>
                    <Input
                      value={createBrand}
                      onChange={(e) => setCreateBrand(e.target.value)}
                      placeholder="العلامة التجارية"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>وحدة القياس *</Label>
                    <Select value={createUomId} onValueChange={setCreateUomId}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر وحدة القياس" />
                      </SelectTrigger>
                      <SelectContent>
                        {uoms.map((u) => (
                          <SelectItem key={u.id} value={u.id}>
                            {u.code} - {u.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Identification & Tracking */}
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">التعريف والتتبع</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>الباركود / UPC</Label>
                    <BarcodeInput
                      value={createBarcode}
                      onChange={setCreateBarcode}
                      id="create-barcode"
                      placeholder="رمز الباركود أو امسح/ارفع صورة"
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4 sm:col-span-2">
                    <Label htmlFor="create-expiry" className="cursor-pointer">يتطلب تاريخ انتهاء؟</Label>
                    <Switch
                      id="create-expiry"
                      checked={createRequiresExpiryDate}
                      onCheckedChange={setCreateRequiresExpiryDate}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>السعر</Label>
                    <Input
                      type="number"
                      step="0.01"
                      min="0"
                      value={createPrice}
                      onChange={(e) => setCreatePrice(e.target.value)}
                      placeholder="0.00"
                    />
                  </div>
                  {createRequiresExpiryDate && (
                    <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md p-2 sm:col-span-2">
                      تم تفعيل تاريخ الانتهاء. سيُطلب إدخال تاريخ الانتهاء عند استلام المخزون.
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
          <div className="shrink-0 flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
            <Button variant="outline" onClick={() => setCreateOpen(false)}>
              إلغاء
            </Button>
            <Button
              onClick={() => void handleCreate()}
              disabled={createSubmitting}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              {createSubmitting ? 'جاري الإضافة...' : 'إضافة'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={(open) => !open && setEditProduct(null)}>
        <DialogContent className="flex flex-col h-[85vh] max-h-[85vh] w-[calc(100vw-2rem)] sm:max-w-xl p-0 gap-0 overflow-hidden">
          <DialogHeader className="shrink-0 px-6 pt-6 pb-4 pr-12 border-b border-gray-100">
            <DialogTitle>تعديل المنتج</DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
            <div className="space-y-8 px-6 py-5">
              {editError && (
                <Alert variant="destructive">
                  <AlertDescription>{editError}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">البيانات الأساسية</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>اسم المنتج *</Label>
                    <Input value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="اسم المنتج" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>الوصف</Label>
                    <Textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} placeholder="الوصف" rows={2} />
                  </div>
                  <div className="space-y-2">
                    <Label>العلامة التجارية</Label>
                    <Input value={editBrand} onChange={(e) => setEditBrand(e.target.value)} placeholder="العلامة التجارية" />
                  </div>
                  <div className="space-y-2">
                    <Label>وحدة القياس</Label>
                    <Select value={editUomId} onValueChange={setEditUomId}>
                      <SelectTrigger><SelectValue placeholder="وحدة القياس" /></SelectTrigger>
                      <SelectContent>
                        {uoms.map((u) => (
                          <SelectItem key={u.id} value={u.id}>{u.code} - {u.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-800 border-b pb-2">التعريف والتتبع</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>الباركود / UPC</Label>
                    <BarcodeInput
                      value={editBarcode}
                      onChange={setEditBarcode}
                      id="edit-barcode"
                      placeholder="رمز الباركود أو امسح/ارفع صورة"
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4 sm:col-span-2">
                    <Label htmlFor="edit-expiry" className="cursor-pointer">يتطلب تاريخ انتهاء؟</Label>
                    <Switch id="edit-expiry" checked={editRequiresExpiryDate} onCheckedChange={setEditRequiresExpiryDate} />
                  </div>
                  <div className="space-y-2">
                    <Label>السعر</Label>
                    <Input type="number" step="0.01" min="0" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                  </div>
                  {editRequiresExpiryDate && (
                    <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md p-2 sm:col-span-2">
                      هذا المنتج يتطلب تاريخ انتهاء عند استلام المخزون.
                    </p>
                  )}
                </div>
              </div>

            </div>
          </div>
          <div className="shrink-0 flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
            <Button variant="outline" onClick={() => setEditOpen(false)}>إلغاء</Button>
            <Button
              onClick={() => void handleEdit()}
              disabled={editSubmitting}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
            >
              {editSubmitting ? 'جاري الحفظ...' : 'حفظ'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
            <AlertDialogDescription>
              هل أنت متأكد من حذف المنتج &quot;{deleteTarget?.name}&quot;؟ لا يمكن التراجع عن هذا الإجراء.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteTarget(null)}>
              إلغاء
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => void handleDelete()}
              disabled={deleteSubmitting}
              className="bg-red-600 hover:bg-red-700"
            >
              {deleteSubmitting ? 'جاري الحذف...' : 'حذف'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
