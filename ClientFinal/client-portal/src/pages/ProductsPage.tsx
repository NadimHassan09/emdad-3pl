import { useState, useEffect, useCallback } from 'react';
import { Plus, RefreshCw, Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  const [createSku, setCreateSku] = useState('');
  const [createPrice, setCreatePrice] = useState('');
  const [createDescription, setCreateDescription] = useState('');
  const [createUomId, setCreateUomId] = useState('');
  const [createSubmitting, setCreateSubmitting] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const [editOpen, setEditOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<MyProduct | null>(null);
  const [editName, setEditName] = useState('');
  const [editSku, setEditSku] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editUomId, setEditUomId] = useState('');
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
    setCreateSku('');
    setCreatePrice('');
    setCreateDescription('');
    setCreateUomId(uoms[0]?.id ?? '');
    setCreateError(null);
    setCreateOpen(true);
  };

  const handleCreate = async () => {
    if (!createName.trim() || !createSku.trim() || !createUomId) {
      setCreateError('الاسم و SKU ووحدة القياس مطلوبة.');
      return;
    }
    try {
      setCreateSubmitting(true);
      setCreateError(null);
      await createProduct({
        name: createName.trim(),
        sku: createSku.trim(),
        price: createPrice ? parseFloat(createPrice) : undefined,
        description: createDescription.trim() || undefined,
        defaultUomId: createUomId,
      });
      setCreateOpen(false);
      void load();
    } catch (e) {
      setCreateError(getProductsErrorMessage(e, 'تعذر إضافة المنتج.'));
    } finally {
      setCreateSubmitting(false);
    }
  };

  const openEdit = (p: MyProduct) => {
    setEditProduct(p);
    setEditName(p.name);
    setEditSku(p.sku);
    setEditPrice(p.price != null ? String(p.price) : '');
    setEditDescription(p.description ?? '');
    setEditUomId(p.defaultUom?.id ?? uoms[0]?.id ?? '');
    setEditError(null);
    setEditOpen(true);
  };

  const handleEdit = async () => {
    if (!editProduct || !editName.trim() || !editSku.trim()) {
      setEditError('الاسم و SKU مطلوبان.');
      return;
    }
    try {
      setEditSubmitting(true);
      setEditError(null);
      await updateProduct(editProduct.id, {
        name: editName.trim(),
        sku: editSku.trim(),
        price: editPrice ? parseFloat(editPrice) : undefined,
        description: editDescription.trim() || undefined,
        defaultUomId: editUomId || undefined,
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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>إضافة منتج جديد</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {createError && (
              <Alert variant="destructive">
                <AlertDescription>{createError}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الاسم *</label>
              <Input
                value={createName}
                onChange={(e) => setCreateName(e.target.value)}
                placeholder="اسم المنتج"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                SKU *</label>
              <Input
                value={createSku}
                onChange={(e) => setCreateSku(e.target.value)}
                placeholder="رمز المنتج"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                السعر</label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={createPrice}
                onChange={(e) => setCreatePrice(e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الوصف</label>
              <Textarea
                value={createDescription}
                onChange={(e) => setCreateDescription(e.target.value)}
                placeholder="وصف المنتج"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                وحدة القياس *</label>
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
            <div className="flex justify-end gap-2 pt-4">
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
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={(open) => !open && setEditProduct(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>تعديل المنتج</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {editError && (
              <Alert variant="destructive">
                <AlertDescription>{editError}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الاسم *</label>
              <Input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="اسم المنتج"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                SKU *</label>
              <Input
                value={editSku}
                onChange={(e) => setEditSku(e.target.value)}
                placeholder="رمز المنتج"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                السعر</label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الوصف</label>
              <Textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="وصف المنتج"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                وحدة القياس</label>
              <Select value={editUomId} onValueChange={setEditUomId}>
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
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setEditOpen(false)}>
                إلغاء
              </Button>
              <Button
                onClick={() => void handleEdit()}
                disabled={editSubmitting}
                className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
              >
                {editSubmitting ? 'جاري الحفظ...' : 'حفظ'}
              </Button>
            </div>
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
