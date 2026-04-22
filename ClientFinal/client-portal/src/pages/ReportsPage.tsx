import { useState } from 'react';
import { Plus, Download } from 'lucide-react';
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
import { CsvButton } from '@/components/CsvButton';

const warehouses = [
  { id: '1', name: 'المستودع الرئيسي - الرياض' },
  { id: '2', name: 'مستودع جدة' },
  { id: '3', name: 'مستودع الدمام' },
  { id: '4', name: 'مستودع الخبر' },
];

const generatedReportsData = [
  {
    id: 'RPT-001',
    reportName: 'تقرير المخزون الحالي - فبراير 2026',
    creationDate: '2026-02-02 14:30',
    extension: 'PDF',
    status: 'مكتمل',
  },
  {
    id: 'RPT-002',
    reportName: 'تقرير سجل الحركات - يناير 2026',
    creationDate: '2026-02-01 10:15',
    extension: 'CSV',
    status: 'مكتمل',
  },
  {
    id: 'RPT-003',
    reportName: 'تقرير ملخص الطلبات - الأسبوع الماضي',
    creationDate: '2026-01-30 16:45',
    extension: 'PDF',
    status: 'مكتمل',
  },
  {
    id: 'RPT-004',
    reportName: 'تقرير سجل المخزون - ديسمبر 2025',
    creationDate: '2026-01-28 09:20',
    extension: 'CSV',
    status: 'مكتمل',
  },
  {
    id: 'RPT-005',
    reportName: 'تقرير المخزون الحالي - يناير 2026',
    creationDate: '2026-01-25 11:00',
    extension: 'PDF',
    status: 'قيد المعالجة',
  },
];

/** Kept for future routing; not mounted in the app shell by default. */
export default function ReportsPage() {
  const [reportType, setReportType] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [sku, setSku] = useState('');
  const [location, setLocation] = useState('');

  const handleGenerateReport = () => {
    console.log('Generating report:', { reportType, dateFrom, dateTo, warehouse, sku, location });
  };

  const handleDownloadReport = (reportId: string, extension: string) => {
    console.log('Downloading report:', reportId, extension);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">التقارير</h1>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">نوع التقارير</label>
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر نوع التقرير" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="تقرير المخزون الحالي">تقرير المخزون الحالي</SelectItem>
                  <SelectItem value="تقرير سجل المخزون">تقرير سجل المخزون</SelectItem>
                  <SelectItem value="تقرير ملخص الطلبات">تقرير ملخص الطلبات</SelectItem>
                  <SelectItem value="تقرير سجل الحركات">تقرير سجل الحركات</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">التاريخ من</label>
              <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="w-full" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">التاريخ إلى</label>
              <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="w-full" />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">المستودعة</label>
              <Select value={warehouse} onValueChange={setWarehouse}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر المستودع" />
                </SelectTrigger>
                <SelectContent>
                  {warehouses.map((wh) => (
                    <SelectItem key={wh.id} value={wh.id}>
                      {wh.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">SKU</label>
              <Input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="أدخل SKU"
                className="w-full"
              />
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

          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200">
            <Button
              onClick={handleGenerateReport}
              className="bg-gradient-to-r from-[#176C33] to-[#104920] hover:from-[#104920] hover:to-[#176C33] text-white gap-2"
            >
              <Plus className="w-4 h-4" />
              إنشاء التقرير
            </Button>
            <Button
              variant="outline"
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              تنزيل CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">تقارير مولدة مؤخراً</h2>
          <CsvButton
            columns={[
              { key: 'reportName', label: 'اسم التقرير' },
              { key: 'creationDate', label: 'تاريخ الإنشاء' },
              { key: 'extension', label: 'الامتداد' },
              { key: 'status', label: 'الحالة' },
            ]}
            data={generatedReportsData}
            getRow={(r) => [r.reportName, r.creationDate, r.extension, r.status]}
            filename="تقارير-مولدة"
          />
        </div>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">اسم التقرير</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">تاريخ الإنشاء</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الامتداد</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الحالة</th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">الإجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {generatedReportsData.map((report, index) => (
                    <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">{report.reportName}</td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">{report.creationDate}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                          {report.extension}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            report.status === 'مكتمل'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownloadReport(report.id, report.extension)}
                          className="text-[#176C33] hover:text-[#104920] hover:bg-[#176C33]/10 gap-2"
                        >
                          <Download className="w-4 h-4" />
                          تنزيل
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
