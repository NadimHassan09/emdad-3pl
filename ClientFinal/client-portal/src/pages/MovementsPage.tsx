import { useState, useEffect, useCallback } from 'react';
import { CsvButton } from '@/components/CsvButton';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  fetchClientPortalLedger,
  type LedgerEntry,
  type LedgerFilterParams,
} from '@/api/clientPortalMovements';
import {
  fetchClientPortalWarehouses,
  type PortalWarehouse,
} from '@/api/clientPortalOrders';

const MOVEMENT_TYPE_MAP: Record<string, string> = {
  RECEIPT: 'وارد',
  SHIPMENT: 'صادر',
  RETURN: 'إرجاع',
  ADJUSTMENT: 'تعديل',
  PUTAWAY: 'وضع',
  PICK: 'جمع',
  TRANSFER_IN: 'نقل داخلي',
  TRANSFER_OUT: 'نقل خارجي',
  CYCLE_COUNT: 'جرد',
};

const AR_TO_MOVEMENT: Record<string, string> = {
  'وارد': 'RECEIPT',
  'صادر': 'SHIPMENT',
  'إرجاع': 'RETURN',
  'تعديل': 'ADJUSTMENT',
};

export interface MappedMovement {
  id: string;
  dateTime: string;
  movementType: string;
  productName: string;
  sku: string;
  quantityChange: string;
  location: string;
  warehouse: string;
  doneBy: string;
  reference: string;
  referenceType: string;
}

function mapLedgerToMovement(entry: LedgerEntry): MappedMovement {
  const typeAr = MOVEMENT_TYPE_MAP[entry.movementType] ?? entry.movementType;
  return {
    id: entry.id,
    dateTime: entry.createdAt ? new Date(entry.createdAt).toLocaleString('en-US') : '',
    movementType: typeAr,
    productName: entry.product?.name ?? '',
    sku: entry.product?.sku ?? '',
    quantityChange: `${entry.qtyChange > 0 ? '+' : ''}${entry.qtyChange}`,
    location: entry.location?.code ?? '',
    warehouse: entry.warehouse?.name ?? '',
    doneBy: entry.createdByActorId ?? '-',
    reference: entry.referenceId ?? '',
    referenceType: entry.referenceType ?? '',
  };
}

export function MovementsPage() {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [movementType, setMovementType] = useState('');
  const [productSku, setProductSku] = useState('');
  const [warehouseId, setWarehouseId] = useState('');
  const [warehouses, setWarehouses] = useState<PortalWarehouse[]>([]);
  const [location, setLocation] = useState('');
  const [movements, setMovements] = useState<MappedMovement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovement, setSelectedMovement] = useState<MappedMovement | null>(null);

  const loadWarehouses = useCallback(async () => {
    try {
      const wh = await fetchClientPortalWarehouses();
      setWarehouses(wh);
    } catch {
      setWarehouses([]);
    }
  }, []);

  const loadMovements = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const params: LedgerFilterParams = {};
      if (dateFrom) params.dateFrom = dateFrom;
      if (dateTo) params.dateTo = dateTo;
      if (movementType && AR_TO_MOVEMENT[movementType]) {
        params.movementType = AR_TO_MOVEMENT[movementType];
      }
      if (warehouseId) params.warehouseId = warehouseId;

      const data = await fetchClientPortalLedger(params);
      let mapped = data.map(mapLedgerToMovement);

      if (productSku.trim()) {
        const skuLower = productSku.toLowerCase();
        mapped = mapped.filter((m) => m.sku.toLowerCase().includes(skuLower));
      }
      if (location.trim()) {
        const locLower = location.toLowerCase();
        mapped = mapped.filter((m) => m.location.toLowerCase().includes(locLower));
      }

      setMovements(mapped);
    } catch (e) {
      console.error('Failed to load movements', e);
      setError('تعذر تحميل الحركات. يرجى المحاولة مرة أخرى.');
      setMovements([]);
    } finally {
      setLoading(false);
    }
  }, [dateFrom, dateTo, movementType, warehouseId, productSku, location]);

  useEffect(() => {
    void loadWarehouses();
  }, [loadWarehouses]);

  useEffect(() => {
    void loadMovements();
  }, [loadMovements]);

  const getMovementTypeColor = (type: string) => {
    switch (type) {
      case 'وارد':
        return 'bg-green-100 text-green-700';
      case 'صادر':
        return 'bg-rose-100 text-rose-700';
      case 'إرجاع':
        return 'bg-amber-100 text-amber-700';
      case 'تعديل':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">سجل الحركات المخزون</h1>
          <div className="flex items-center gap-3">
            <CsvButton
              columns={[
                { key: 'dateTime', label: 'التاريخ والوقت' },
                { key: 'movementType', label: 'نوع الحركة' },
                { key: 'productName', label: 'اسم المنتج' },
                { key: 'sku', label: 'SKU' },
                { key: 'quantityChange', label: 'تغير الكمية' },
                { key: 'location', label: 'الموقع' },
                { key: 'warehouse', label: 'المستودع' },
                { key: 'reference', label: 'المرجع' },
              ]}
              data={movements}
              getRow={(m) => [
                m.dateTime,
                m.movementType,
                m.productName,
                m.sku,
                m.quantityChange,
                m.location,
                m.warehouse,
                m.reference,
              ]}
              filename="movements"
              disabled={loading}
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50"
            />
          </div>
        </div>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">نطاق التاريخ</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="flex-1"
                  />
                  <span className="text-gray-500 text-sm whitespace-nowrap">إلى</span>
                  <Input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">نوع الحركة</label>
                <Select value={movementType} onValueChange={setMovementType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر نوع الحركة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="وارد">وارد</SelectItem>
                    <SelectItem value="صادر">صادر</SelectItem>
                    <SelectItem value="إرجاع">إرجاع</SelectItem>
                    <SelectItem value="تعديل">تعديل</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">SKU المنتج</label>
                <Input
                  type="text"
                  value={productSku}
                  onChange={(e) => setProductSku(e.target.value)}
                  placeholder="أدخل SKU"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">المستودع</label>
                <Select value={warehouseId} onValueChange={setWarehouseId}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر المستودع" />
                  </SelectTrigger>
                  <SelectContent>
                    {warehouses.map((wh) => (
                      <SelectItem key={wh.id} value={wh.id}>
                        {wh.name} ({wh.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">الموقع</label>
                <Input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="أدخل كود الموقع"
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm mt-6">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="data-table w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    التاريخ والوقت
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    نوع الحركة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    اسم المنتج
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">SKU</th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تغيير الكمية
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    الموقع
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    تم بواسطة
                  </th>
                  <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                    المرجع
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-sm text-gray-500">
                      جارِ تحميل الحركات...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-sm text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : movements.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-sm text-gray-500">
                      لا توجد حركات مطابقة للفلاتر الحالية.
                    </td>
                  </tr>
                ) : (
                  movements.map((movement) => (
                    <tr
                      key={movement.id}
                      onClick={() => setSelectedMovement(movement)}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                        {movement.dateTime}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getMovementTypeColor(movement.movementType)}`}
                        >
                          {movement.movementType}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {movement.productName}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono font-medium">
                        {movement.sku}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-sm font-medium ${
                            movement.quantityChange.startsWith('+')
                              ? 'text-green-600'
                              : 'text-rose-600'
                          }`}
                        >
                          {movement.quantityChange}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono">
                        {movement.location}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900">{movement.doneBy}</td>
                      <td className="py-4 px-4 text-sm text-gray-900 font-mono">
                        {movement.reference}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={selectedMovement !== null}
        onOpenChange={(open) => !open && setSelectedMovement(null)}
      >
        <DialogContent className="sm:max-w-2xl">
          {selectedMovement && (
            <>
              <DialogHeader>
                <DialogTitle>تفاصيل الحركة - {selectedMovement.id}</DialogTitle>
                <DialogDescription className="text-right">
                  {selectedMovement.dateTime}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">نوع الحركة</p>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getMovementTypeColor(selectedMovement.movementType)}`}
                    >
                      {selectedMovement.movementType}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">اسم المنتج</p>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedMovement.productName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">SKU</p>
                    <p className="text-sm font-mono text-gray-900">{selectedMovement.sku}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">تغيير الكمية</p>
                    <span
                      className={`text-sm font-medium ${
                        selectedMovement.quantityChange.startsWith('+')
                          ? 'text-green-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {selectedMovement.quantityChange}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">الموقع</p>
                    <p className="text-sm font-mono text-gray-900">{selectedMovement.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">المستودع</p>
                    <p className="text-sm text-gray-900">{selectedMovement.warehouse}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">تم بواسطة</p>
                    <p className="text-sm text-gray-900">{selectedMovement.doneBy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">المرجع</p>
                    <p className="text-sm font-mono text-gray-900">{selectedMovement.reference}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">نوع المرجع</p>
                    <p className="text-sm text-gray-900">{selectedMovement.referenceType}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
