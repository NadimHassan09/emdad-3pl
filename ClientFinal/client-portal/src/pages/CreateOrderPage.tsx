import { useState, useEffect, useCallback } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
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
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { BarcodeInput } from '@/components/BarcodeInput';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  fetchClientPortalProducts,
  createInboundPortal,
  createOutboundPortal,
  addInboundPortalItem,
  addOutboundPortalItem,
  type PortalProduct,
} from '@/api/clientPortalOrders';
import { getOrdersErrorMessage } from '@/api/orderUtils';
import {
  createProduct,
  fetchUomList,
  getProductsErrorMessage,
  type UomOption,
} from '@/api/clientPortalProducts';

export function CreateOrderPage({
  orderType,
  onCancel,
}: {
  orderType: 'وارد' | 'صادر';
  onCancel: () => void;
}) {
  const [products, setProducts] = useState<PortalProduct[]>([]);
  const [metaLoading, setMetaLoading] = useState(true);
  const [expectedDate, setExpectedDate] = useState('');
  const [orderItems, setOrderItems] = useState<
    Array<{ id: string; productId: string; quantity: number }>
  >([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uoms, setUoms] = useState<UomOption[]>([]);

  const [createProductOpen, setCreateProductOpen] = useState(false);
  const [createProductName, setCreateProductName] = useState('');
  const [createProductDescription, setCreateProductDescription] = useState('');
  const [createProductBrand, setCreateProductBrand] = useState('');
  const [createProductBarcode, setCreateProductBarcode] = useState('');
  const [createProductPrice, setCreateProductPrice] = useState('');
  const [createProductUomId, setCreateProductUomId] = useState('');
  const [createProductRequiresExpiryDate, setCreateProductRequiresExpiryDate] = useState(false);
  const [createProductSubmitting, setCreateProductSubmitting] = useState(false);
  const [createProductError, setCreateProductError] = useState<string | null>(null);

  const loadMeta = useCallback(async () => {
    try {
      setMetaLoading(true);
      setError(null);
      const [pr, uomList] = await Promise.all([
        fetchClientPortalProducts(),
        fetchUomList(),
      ]);
      setProducts(pr);
      setUoms(uomList);
      if (!createProductUomId && uomList.length > 0) {
        setCreateProductUomId(uomList[0].id);
      }
    } catch (e) {
      setError(getOrdersErrorMessage(e));
    } finally {
      setMetaLoading(false);
    }
  }, [createProductUomId]);

  useEffect(() => {
    void loadMeta();
  }, [loadMeta]);

  const addOrderItem = () => {
    setOrderItems((prev) => [
      ...prev,
      { id: `${Date.now()}-${prev.length}`, productId: '', quantity: 0 },
    ]);
  };

  const removeOrderItem = (id: string) => {
    setOrderItems((prev) => prev.filter((x) => x.id !== id));
  };

  const updateOrderItem = (
    id: string,
    field: 'productId' | 'quantity',
    value: string | number,
  ) => {
    setOrderItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleSubmit = async () => {
    if (orderType === 'صادر' && orderItems.some((i) => i.quantity < 0)) {
      setError('في الطلب الصادر، الكمية لا يمكن أن تكون سالبة.');
      return;
    }
    const lines = orderItems.filter((i) => i.productId && i.quantity > 0);
    if (lines.length === 0) {
      setError('أضف بنداً واحداً على الأقل بكمية صحيحة.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      if (orderType === 'وارد') {
        const created = (await createInboundPortal({
          expectedDate: expectedDate || undefined,
        })) as { id: string };
        const oid = created.id;
        for (const item of lines) {
          const prod = products.find((p) => p.id === item.productId);
          const uomId = prod?.defaultUom?.id;
          if (!uomId) throw new Error('المنتج بدون وحدة قياس');
          await addInboundPortalItem(oid, {
            productId: item.productId,
            qtyOrdered: item.quantity,
            uomId,
          });
        }
      } else {
        const created = (await createOutboundPortal({
          expectedShipDate: expectedDate || undefined,
        })) as { id: string };
        const oid = created.id;
        for (const item of lines) {
          const prod = products.find((p) => p.id === item.productId);
          const uomId = prod?.defaultUom?.id;
          if (!uomId) throw new Error('المنتج بدون وحدة قياس');
          await addOutboundPortalItem(oid, {
            productId: item.productId,
            qtyOrdered: item.quantity,
            uomId,
          });
        }
      }
      onCancel();
    } catch (e) {
      console.error(e);
      setError(
        e instanceof Error && e.message
          ? e.message
          : getOrdersErrorMessage(e),
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenCreateProduct = () => {
    setCreateProductName('');
    setCreateProductDescription('');
    setCreateProductBrand('');
    setCreateProductBarcode('');
    setCreateProductPrice('');
    setCreateProductUomId(uoms[0]?.id ?? '');
    setCreateProductRequiresExpiryDate(false);
    setCreateProductError(null);
    setCreateProductOpen(true);
  };

  const handleCreateProduct = async () => {
    if (!createProductName.trim() || !createProductUomId) {
      setCreateProductError('اسم المنتج ووحدة القياس مطلوبان.');
      return;
    }
    try {
      setCreateProductSubmitting(true);
      setCreateProductError(null);
      const price = createProductPrice ? parseFloat(createProductPrice) : undefined;
      const created = await createProduct({
        name: createProductName.trim(),
        description: createProductDescription.trim() || undefined,
        brand: createProductBrand.trim() || undefined,
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        unitsPerCarton: 1,
        defaultUomId: createProductUomId,
        barcode: createProductBarcode.trim() || undefined,
        requiresExpiryDate: createProductRequiresExpiryDate,
        price: price != null && !Number.isNaN(price) ? price : undefined,
      });

      const refreshedProducts = await fetchClientPortalProducts();
      setProducts(refreshedProducts);
      setCreateProductOpen(false);

      // Fill the last empty line with the newly created product for faster workflow.
      setOrderItems((prev) => {
        const idx = prev.findIndex((i) => !i.productId);
        if (idx === -1) return prev;
        return prev.map((item, itemIndex) =>
          itemIndex === idx ? { ...item, productId: created.id } : item,
        );
      });
    } catch (e) {
      setCreateProductError(getProductsErrorMessage(e, 'تعذر إنشاء المنتج.'));
    } finally {
      setCreateProductSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">
        {orderType === 'وارد' ? 'إرسال طلب وارد' : 'إرسال طلب صادر'}
      </h1>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>تعذر الإرسال</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="border-0 shadow-sm">
        <CardContent className="p-6 space-y-4">
          {metaLoading ? (
            <Skeleton className="h-40 w-full" />
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {orderType === 'وارد' ? 'تاريخ الوصول المتوقع' : 'تاريخ الشحن المتوقع'}
                </label>
                <Input
                  type="date"
                  value={expectedDate}
                  onChange={(e) => setExpectedDate(e.target.value)}
                  className="w-full"
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-xl font-bold text-gray-900">بنود الطلب</h2>
          <div className="flex items-center gap-2">
            <CsvButton
              columns={[
                { key: 'product', label: 'المنتج' },
                { key: 'quantity', label: 'الكمية' },
              ]}
              data={orderItems}
              getRow={(item) => {
                const p = products.find((pr) => pr.id === item.productId);
                return [p ? `${p.name} (${p.sku})` : '-', item.quantity ?? ''];
              }}
              filename="order-items"
              disabled={metaLoading || orderItems.length === 0}
            />
            <Button
              type="button"
              onClick={addOrderItem}
              disabled={metaLoading}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] text-white gap-2"
            >
              <Plus className="w-4 h-4" />
              إضافة بند
            </Button>
            {orderType === 'وارد' && (
              <Button
                type="button"
                variant="outline"
                onClick={handleOpenCreateProduct}
                disabled={metaLoading}
                className="text-[#176C33] border-[#176C33]/30 hover:bg-[#176C33]/5 gap-2"
              >
                <Plus className="w-4 h-4" />
                إضافة منتج
              </Button>
            )}
          </div>
        </div>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold">المنتج</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold">الكمية</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold">حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="py-8 text-center text-gray-500">
                        لا توجد بنود. اضغط &quot;إضافة بند&quot;.
                      </td>
                    </tr>
                  ) : (
                    orderItems.map((item) => (
                      <tr key={item.id} className="border-b border-gray-50">
                        <td className="py-4 px-4">
                          <Select
                            value={item.productId}
                            onValueChange={(v) => updateOrderItem(item.id, 'productId', v)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="اختر المنتج" />
                            </SelectTrigger>
                            <SelectContent>
                              {products.map((p) => (
                                <SelectItem key={p.id} value={p.id}>
                                  {p.name} ({p.sku})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="py-4 px-4">
                          <Input
                            type="number"
                            min={0.0001}
                            step="any"
                            value={item.quantity || ''}
                            onChange={(e) =>
                              updateOrderItem(item.id, 'quantity', Math.max(0, parseFloat(e.target.value) || 0))
                            }
                            className="w-full"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeOrderItem(item.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
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

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel} disabled={submitting}>
          إلغاء
        </Button>
        <Button
          type="button"
          onClick={() => void handleSubmit()}
          disabled={submitting || metaLoading}
          className="bg-gradient-to-r from-[#176C33] to-[#104920] text-white"
        >
          {submitting ? 'جارِ الإرسال...' : 'إرسال الطلب'}
        </Button>
      </div>

      <Dialog open={createProductOpen} onOpenChange={setCreateProductOpen}>
        <DialogContent className="flex flex-col h-[85vh] max-h-[85vh] w-[calc(100vw-2rem)] sm:max-w-xl p-0 gap-0 overflow-hidden">
          <DialogHeader className="shrink-0 px-6 pt-6 pb-4 pr-12 border-b border-gray-100">
            <DialogTitle>إضافة منتج جديد</DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
            <div className="space-y-8 px-6 py-5">
              {createProductError && (
                <Alert variant="destructive">
                  <AlertDescription>{createProductError}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">البيانات الأساسية</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>اسم المنتج *</Label>
                    <Input
                      value={createProductName}
                      onChange={(e) => setCreateProductName(e.target.value)}
                      placeholder="اسم المنتج"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>وحدة القياس *</Label>
                    <Select value={createProductUomId} onValueChange={setCreateProductUomId}>
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

                  <div className="space-y-2">
                    <Label>السعر</Label>
                    <Input
                      type="number"
                      min="0"
                      step="0.01"
                      value={createProductPrice}
                      onChange={(e) => setCreateProductPrice(e.target.value)}
                      placeholder="0.00"
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label>الوصف</Label>
                    <Textarea
                      value={createProductDescription}
                      onChange={(e) => setCreateProductDescription(e.target.value)}
                      placeholder="وصف المنتج"
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>العلامة التجارية</Label>
                    <Input
                      value={createProductBrand}
                      onChange={(e) => setCreateProductBrand(e.target.value)}
                      placeholder="العلامة التجارية"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-1">التعريف والتتبع</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>الباركود / UPC</Label>
                    <BarcodeInput
                      value={createProductBarcode}
                      onChange={setCreateProductBarcode}
                      id="quick-create-barcode"
                      placeholder="اكتب رقم الباركود أو ارفع صورة"
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4 sm:col-span-2">
                    <Label htmlFor="quick-create-expiry" className="cursor-pointer">
                      يتطلب تاريخ انتهاء؟
                    </Label>
                    <Switch
                      id="quick-create-expiry"
                      checked={createProductRequiresExpiryDate}
                      onCheckedChange={setCreateProductRequiresExpiryDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex justify-end gap-2 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
            <Button variant="outline" onClick={() => setCreateProductOpen(false)}>
              إلغاء
            </Button>
            <Button
              onClick={() => void handleCreateProduct()}
              disabled={createProductSubmitting}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] text-white"
            >
              {createProductSubmitting ? 'جارِ الإنشاء...' : 'إنشاء المنتج'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
