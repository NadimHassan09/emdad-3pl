import { useState, useEffect, useCallback } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { CsvButton } from '@/components/CsvButton';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  fetchClientPortalProducts,
  createInboundPortal,
  createOutboundPortal,
  addInboundPortalItem,
  addOutboundPortalItem,
  type PortalProduct,
} from '@/api/clientPortalOrders';
import { getOrdersErrorMessage } from '@/api/orderUtils';

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

  const loadMeta = useCallback(async () => {
    try {
      setMetaLoading(true);
      setError(null);
      const pr = await fetchClientPortalProducts();
      setProducts(pr);
    } catch (e) {
      setError(getOrdersErrorMessage(e));
    } finally {
      setMetaLoading(false);
    }
  }, []);

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
    </>
  );
}
