import { useState, useEffect, useCallback } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BarcodeInput } from '@/components/BarcodeInput';
import {
  createProduct,
  fetchUomList,
  getProductsErrorMessage,
  type UomOption,
} from '@/api/clientPortalProducts';
import { buildCreateProductPayload } from '@/lib/productCreatePayload';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called after a product is created successfully */
  onCreated?: () => void;
};

export function ProductCreateModal({ open, onOpenChange, onCreated }: Props) {
  const [uoms, setUoms] = useState<UomOption[]>([]);
  const [createName, setCreateName] = useState('');
  const [createDescription, setCreateDescription] = useState('');
  const [createCategory, setCreateCategory] = useState('');
  const [createBrand, setCreateBrand] = useState('');
  const [createWeight, setCreateWeight] = useState('');
  const [createLength, setCreateLength] = useState('');
  const [createWidth, setCreateWidth] = useState('');
  const [createHeight, setCreateHeight] = useState('');
  const [createUnitsPerCarton, setCreateUnitsPerCarton] = useState('');
  const [createUomId, setCreateUomId] = useState('');
  const [createBarcode, setCreateBarcode] = useState('');
  const [createIsSerialized, setCreateIsSerialized] = useState(false);
  const [createIsBatchTracked, setCreateIsBatchTracked] = useState(false);
  const [createRequiresExpiryDate, setCreateRequiresExpiryDate] = useState(false);
  const [createMinThreshold, setCreateMinThreshold] = useState('');
  const [createReorderPoint, setCreateReorderPoint] = useState('');
  const [createDeclaredValue, setCreateDeclaredValue] = useState('');
  const [createPrice, setCreatePrice] = useState('');
  const [createSubmitting, setCreateSubmitting] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const loadUoms = useCallback(async () => {
    try {
      const uomList = await fetchUomList();
      setUoms(uomList);
      if (uomList.length > 0) {
        setCreateUomId((prev) => prev || uomList[0].id);
      }
    } catch {
      setUoms([]);
    }
  }, []);

  useEffect(() => {
    if (open) {
      void loadUoms();
      setCreateName('');
      setCreateDescription('');
      setCreateCategory('');
      setCreateBrand('');
      setCreateWeight('');
      setCreateLength('');
      setCreateWidth('');
      setCreateHeight('');
      setCreateUnitsPerCarton('');
      setCreateBarcode('');
      setCreateIsSerialized(false);
      setCreateIsBatchTracked(false);
      setCreateRequiresExpiryDate(false);
      setCreateMinThreshold('');
      setCreateReorderPoint('');
      setCreateDeclaredValue('');
      setCreatePrice('');
      setCreateError(null);
    }
  }, [open, loadUoms]);

  const handleCreate = async () => {
    const built = buildCreateProductPayload({
      createName,
      createDescription,
      createCategory,
      createBrand,
      createWeight,
      createLength,
      createWidth,
      createHeight,
      createUnitsPerCarton,
      createUomId,
      createBarcode,
      createIsSerialized,
      createIsBatchTracked,
      createRequiresExpiryDate,
      createMinThreshold,
      createReorderPoint,
      createDeclaredValue,
      createPrice,
    });
    if (!built.ok) {
      setCreateError(built.error);
      return;
    }
    try {
      setCreateSubmitting(true);
      setCreateError(null);
      await createProduct(built.payload);
      onOpenChange(false);
      onCreated?.();
    } catch (e) {
      setCreateError(getProductsErrorMessage(e, 'تعذر إضافة المنتج.'));
    } finally {
      setCreateSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col max-h-[85vh] w-[calc(100vw-2rem)] sm:max-w-xl p-0 gap-0 overflow-hidden">
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

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">تعريف المنتج</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 sm:col-span-2">
                  <Label>اسم المنتج *</Label>
                  <Input
                    value={createName}
                    onChange={(e) => setCreateName(e.target.value)}
                    placeholder="اسم المنتج"
                  />
                </div>
                <div className="space-y-2">
                  <Label>الفئة</Label>
                  <Input
                    value={createCategory}
                    onChange={(e) => setCreateCategory(e.target.value)}
                    placeholder="مثال: إلكترونيات"
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
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">
                معلومات الشحن (اختياري)
              </h4>
              <p className="text-xs text-gray-500">
                إذا تركت الحقول فارغة، يُستخدم وزن 0 وأبعاد 0 ووحدة واحدة لكل كرتون تلقائياً.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>الوزن (كجم)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={createWeight}
                    onChange={(e) => setCreateWeight(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label>الوحدات لكل كرتون</Label>
                  <Input
                    type="number"
                    min="1"
                    value={createUnitsPerCarton}
                    onChange={(e) => setCreateUnitsPerCarton(e.target.value)}
                    placeholder="1"
                  />
                </div>
                <div className="space-y-2">
                  <Label>الطول (سم)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={createLength}
                    onChange={(e) => setCreateLength(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label>العرض (سم)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={createWidth}
                    onChange={(e) => setCreateWidth(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label>الارتفاع (سم)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={createHeight}
                    onChange={(e) => setCreateHeight(e.target.value)}
                    placeholder="0"
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

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">التعريف والتتبع</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 sm:col-span-2">
                  <Label>الباركود / UPC</Label>
                  <BarcodeInput
                    value={createBarcode}
                    onChange={setCreateBarcode}
                    id="orders-modal-barcode"
                    placeholder="رمز الباركود أو امسح/ارفع صورة"
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <Label htmlFor="modal-serialized" className="cursor-pointer">
                    منتج مسلسل؟
                  </Label>
                  <Switch
                    id="modal-serialized"
                    checked={createIsSerialized}
                    onCheckedChange={setCreateIsSerialized}
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <Label htmlFor="modal-batch" className="cursor-pointer">
                    تتبع بالدفعة/اللوت؟
                  </Label>
                  <Switch
                    id="modal-batch"
                    checked={createIsBatchTracked}
                    onCheckedChange={setCreateIsBatchTracked}
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4 sm:col-span-2">
                  <Label htmlFor="modal-expiry" className="cursor-pointer">
                    يتطلب تاريخ انتهاء؟
                  </Label>
                  <Switch
                    id="modal-expiry"
                    checked={createRequiresExpiryDate}
                    onCheckedChange={setCreateRequiresExpiryDate}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">
                قواعد المخزون (اختياري)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>حد التنبيه الأدنى للمخزون</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={createMinThreshold}
                    onChange={(e) => setCreateMinThreshold(e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label>نقطة إعادة الطلب</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={createReorderPoint}
                    onChange={(e) => setCreateReorderPoint(e.target.value)}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">
                المعلومات التجارية (اختياري)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>القيمة المعلنة</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={createDeclaredValue}
                    onChange={(e) => setCreateDeclaredValue(e.target.value)}
                    placeholder="0.00"
                  />
                </div>
                <div className="space-y-2">
                  <Label>سعر البيع</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={createPrice}
                    onChange={(e) => setCreatePrice(e.target.value)}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            إلغاء
          </Button>
          <Button
            type="button"
            onClick={() => void handleCreate()}
            disabled={createSubmitting}
            className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white"
          >
            {createSubmitting ? 'جاري الإضافة...' : 'إضافة'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
