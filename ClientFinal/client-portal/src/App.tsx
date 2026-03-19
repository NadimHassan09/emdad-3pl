import { useState, useEffect } from 'react';
import './App.css';
import {
  LayoutDashboard,
  Package,
  PackageSearch,
  ShoppingCart,
  ArrowLeftRight,
  FileText,
  CreditCard,
  Receipt,
  Users,
  Settings,
  Search,
  Menu,
  X,
  ChevronDown,
  Download,
  Plus,
  Power,
  Database,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CsvButton } from '@/components/CsvButton';
import { LoginPage } from '@/components/LoginPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { InventoryPage } from '@/pages/InventoryPage';
import { OrdersPage } from '@/pages/OrdersPage';
import { CreateOrderPage } from '@/pages/CreateOrderPage';
import { OrderDetailsPage } from '@/pages/OrderDetailsPage';
import { BillingPage } from '@/pages/BillingPage';
import { InvoicesPage } from '@/pages/InvoicesPage';
import { InvoiceDetailsPage } from '@/pages/InvoiceDetailsPage';
import { UsersPage } from '@/pages/UsersPage';
import { NotificationsPage } from '@/pages/NotificationsPage';
import { NotificationsDropdown } from '@/components/NotificationsDropdown';
import { SettingsPage } from '@/pages/SettingsPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { MasterDataPage } from '@/pages/MasterDataPage';
import { MovementsPage } from '@/pages/MovementsPage';
import { isAuthenticated, logout, getCurrentUser } from '@/lib/auth';
import type { UserInfo } from '@/lib/auth';
import { fetchClientSettings } from '@/api/clientPortalSettings';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

// Sidebar navigation items
const sidebarItems = [
  { icon: LayoutDashboard, label: 'لوحة التحكم', active: true },
  { icon: Package, label: 'المخزون', active: false },
  { icon: Database, label: 'البيانات الأساسية', active: false },
  { icon: ShoppingCart, label: 'الطلبات', active: false },
  { icon: ArrowLeftRight, label: 'الحركات', active: false },
  { icon: FileText, label: 'التقارير', active: false },
  { icon: CreditCard, label: 'الفوترة', active: false },
  { icon: Receipt, label: 'الفواتير', active: false },
  { icon: Users, label: 'المستخدمون', active: false },
];

const labelToRoute: Record<string, string> = {
  'لوحة التحكم': '/dashboard',
  'المخزون': '/inventory',
  'البيانات الأساسية': '/master-data',
  'الطلبات': '/orders',
  'الحركات': '/movements',
  'التقارير': '/reports',
  'الفوترة': '/billing',
  'الفواتير': '/invoices',
  'المستخدمون': '/users',
};

function getActiveSidebarLabel(pathname: string): string {
  if (pathname.startsWith('/orders')) return 'الطلبات';
  if (pathname.startsWith('/invoices')) return 'الفواتير';
  if (pathname.startsWith('/dashboard')) return 'لوحة التحكم';
  if (pathname.startsWith('/inventory')) return 'المخزون';
  if (pathname.startsWith('/master-data')) return 'البيانات الأساسية';
  if (pathname.startsWith('/movements')) return 'الحركات';
  if (pathname.startsWith('/reports')) return 'التقارير';
  if (pathname.startsWith('/billing')) return 'الفوترة';
  if (pathname.startsWith('/users')) return 'المستخدمون';
  return 'لوحة التحكم';
}

// Stats cards data - moved to DashboardPage component

// Table data
// tableData moved to DashboardPage component

const warehouses = [
  { id: '1', name: 'المستودع الرئيسي - الرياض' },
  { id: '2', name: 'مستودع جدة' },
  { id: '3', name: 'مستودع الدمام' },
  { id: '4', name: 'مستودع الخبر' },
];

// Movements/Transactions data - moved to MovementsPage component
// @ts-ignore - kept for reference
const _movementsData = [
  {
    id: 'MOV-001',
    dateTime: '2026-02-02 10:15',
    movementType: 'وارد',
    productName: 'Product A',
    sku: 'SKU-1001',
    quantityChange: '+50',
    location: 'LOC-001',
    doneBy: 'أحمد محمد',
    reference: 'INB-00041',
    referenceType: 'طلب وارد',
    warehouse: 'المستودع الرئيسي - الرياض',
  },
  {
    id: 'MOV-002',
    dateTime: '2026-02-02 09:40',
    movementType: 'صادر',
    productName: 'Product B',
    sku: 'SKU-2003',
    quantityChange: '-8',
    location: 'LOC-002',
    doneBy: 'محمد علي',
    reference: 'OUT-00018',
    referenceType: 'طلب صادر',
    warehouse: 'مستودع جدة',
  },
  {
    id: 'MOV-003',
    dateTime: '2026-02-02 08:30',
    movementType: 'وارد',
    productName: 'Product C',
    sku: 'SKU-3005',
    quantityChange: '+120',
    location: 'LOC-003',
    doneBy: 'فاطمة أحمد',
    reference: 'INB-00040',
    referenceType: 'طلب وارد',
    warehouse: 'مستودع الدمام',
  },
  {
    id: 'MOV-004',
    dateTime: '2026-02-01 16:45',
    movementType: 'صادر',
    productName: 'Product A',
    sku: 'SKU-1001',
    quantityChange: '-25',
    location: 'LOC-001',
    doneBy: 'خالد سعيد',
    reference: 'OUT-00017',
    referenceType: 'طلب صادر',
    warehouse: 'المستودع الرئيسي - الرياض',
  },
  {
    id: 'MOV-005',
    dateTime: '2026-02-01 14:20',
    movementType: 'return',
    productName: 'Product D',
    sku: 'SKU-4007',
    quantityChange: '+5',
    location: 'LOC-004',
    doneBy: 'سارة حسن',
    reference: 'RET-00012',
    referenceType: 'return',
    warehouse: 'مستودع الخبر',
  },
  {
    id: 'MOV-006',
    dateTime: '2026-02-01 11:30',
    movementType: 'فاتورة',
    productName: 'Product E',
    sku: 'SKU-5009',
    quantityChange: '-15',
    location: 'LOC-005',
    doneBy: 'علي محمود',
    reference: 'INV-00089',
    referenceType: 'فاتورة',
    warehouse: 'المستودع الرئيسي - الرياض',
  },
];

// Generated Reports data
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

// Reports Page Component
function ReportsPage() {
  const [reportType, setReportType] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [sku, setSku] = useState('');
  const [location, setLocation] = useState('');

  const handleGenerateReport = () => {
    // Handle report generation
    console.log('Generating report:', { reportType, dateFrom, dateTo, warehouse, sku, location });
  };

  const handleDownloadReport = (reportId: string, extension: string) => {
    // Handle report download
    console.log('Downloading report:', reportId, extension);
  };

  return (
    <>
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900">التقارير</h1>

      {/* Section 1: Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Report Type */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                نوع التقارير
              </label>
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

            {/* Date From */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                التاريخ من
              </label>
              <Input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Date To */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                التاريخ إلى
              </label>
              <Input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Warehouse */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                المستودعة
              </label>
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

            {/* SKU */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                SKU
              </label>
              <Input
                type="text"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                placeholder="أدخل SKU"
                className="w-full"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                الموقع
              </label>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="أدخل كود الموقع"
                className="w-full"
              />
            </div>
          </div>

          {/* Action Buttons */}
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
            <Button
              variant="outline"
              className="text-[#176C33] border-[#176C33]/30 hover:bg-gradient-to-r hover:from-[#176C33]/10 hover:to-[#104920]/10 hover:border-[#176C33]/50 gap-2"
            >
              <Download className="w-4 h-4" />
              تنزيل PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Generated Reports Table */}
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
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      اسم التقرير
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      تاريخ الإنشاء
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الامتداد
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الحالة
                    </th>
                    <th className="py-3 px-4 text-right text-sm font-semibold text-gray-600">
                      الإجراء
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generatedReportsData.map((report, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                        {report.reportName}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 font-mono">
                        {report.creationDate}
                      </td>
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

function CreateOrderRoute({ onCancel }: { onCancel: () => void }) {
  const { type } = useParams();
  const orderType: 'وارد' | 'صادر' = type === 'outbound' ? 'صادر' : 'وارد';
  return <CreateOrderPage orderType={orderType} onCancel={onCancel} />;
}

function OrderDetailsRoute({ onBack }: { onBack: () => void }) {
  const { type, orderNumber } = useParams();
  const orderType: 'وارد' | 'صادر' = type === 'outbound' ? 'صادر' : 'وارد';
  return (
    <OrderDetailsPage
      orderRef={decodeURIComponent(orderNumber ?? '')}
      orderType={orderType}
      onBack={onBack}
    />
  );
}

function InvoiceDetailsRoute({ onBack }: { onBack: () => void }) {
  const { invoiceId } = useParams();
  return <InvoiceDetailsPage invoiceId={decodeURIComponent(invoiceId ?? '')} onBack={onBack} />;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [profileName, setProfileName] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  );
  const activeItem = getActiveSidebarLabel(location.pathname);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          const userInfo = await getCurrentUser();
          if (userInfo) {
            setUser(userInfo);
            setAuthenticated(true);
            try {
              const settings = await fetchClientSettings();
              setProfileName(
                [settings.profile.firstName, settings.profile.lastName].filter(Boolean).join(' ') ||
                  null
              );
            } catch {
              setProfileName(null);
            }
          } else {
            setAuthenticated(false);
          }
        } catch {
          setAuthenticated(false);
        }
      } else {
        setAuthenticated(false);
      }
      setCheckingAuth(false);
    };
    checkAuth();
  }, []);

  const handleLoginSuccess = async () => {
    const userInfo = await getCurrentUser();
    if (userInfo) {
      setUser(userInfo);
      setAuthenticated(true);
      try {
        const settings = await fetchClientSettings();
        setProfileName(
          [settings.profile.firstName, settings.profile.lastName].filter(Boolean).join(' ') || null
        );
      } catch {
        setProfileName(null);
      }
      navigate('/dashboard', { replace: true });
    }
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    setUser(null);
    setProfileName(null);
  };

  // Show loading state while checking authentication
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحقق من الهوية...</p>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!authenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-full bg-white border-l border-gray-200 z-50 transition-all duration-300 w-64 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#176C33] to-[#104920] rounded-xl flex items-center justify-center shadow-lg shadow-[#176C33]/25">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">مخزني</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 sm:p-4 space-y-1 overflow-y-auto h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)]">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                const targetRoute = labelToRoute[item.label] || '/dashboard';
                navigate(targetRoute);
              }}
              className={`sidebar-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeItem === item.label
                  ? 'active bg-gradient-to-l from-[#176C33]/10 to-[#104920]/10 text-[#176C33]'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 transition-all duration-300 min-w-0 mr-0 lg:mr-64">
        {/* Navbar */}
        <header className="h-14 sm:h-16 bg-white border-b border-gray-200 sticky top-0 z-40 px-4 sm:px-6 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              aria-label="القائمة"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            <div className="relative flex-1 max-w-xs hidden sm:block">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="البحث..."
                className="w-full min-w-0 pr-9 pl-3 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#176C33]/20 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-4 shrink-0">
            <NotificationsDropdown />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-200 hover:opacity-80 transition-opacity">
                  <Avatar className="w-9 h-9 border-2 border-[#176C33]/20">
                    <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-sm font-medium">
                      {profileName ? profileName.charAt(0) : user?.role ? user.role.charAt(0) : 'ع'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.role || 'عميل'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {profileName || 'حساب عميل'}
                    </p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate('/settings')} className="cursor-pointer">
                  <Settings className="w-4 h-4 ml-2" />
                  الإعدادات
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                  <Power className="w-4 h-4 ml-2" />
                  تسجيل الخروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/master-data" element={<MasterDataPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/orders"
              element={
                <OrdersPage
                  onCreateOrder={(type: 'وارد' | 'صادر') => {
                    const typePath = type === 'وارد' ? 'inbound' : 'outbound';
                    navigate(`/orders/create/${typePath}`);
                  }}
                  onCreateOrderDetails={(orderRef: string, type: 'وارد' | 'صادر') => {
                    const typePath = type === 'وارد' ? 'inbound' : 'outbound';
                    navigate(`/orders/${typePath}/${encodeURIComponent(orderRef)}`);
                  }}
                />
              }
            />
            <Route
              path="/orders/create/:type"
              element={<CreateOrderRoute onCancel={() => navigate('/orders')} />}
            />
            <Route
              path="/orders/:type/:orderNumber"
              element={<OrderDetailsRoute onBack={() => navigate('/orders')} />}
            />
            <Route path="/movements" element={<MovementsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route
              path="/invoices"
              element={
                <InvoicesPage
                  onViewInvoice={(invoiceId: string) => {
                    navigate(`/invoices/${encodeURIComponent(invoiceId)}`);
                  }}
                />
              }
            />
            <Route
              path="/invoices/:invoiceId"
              element={<InvoiceDetailsRoute onBack={() => navigate('/invoices')} />}
            />
            <Route path="/users" element={<UsersPage />} />
            <Route
              path="/notifications"
              element={
                <NotificationsPage
                  onNavigateToReference={(referenceType: string, referenceId: string) => {
                    if (referenceType === 'طلب وارد') {
                      navigate(`/orders/inbound/${encodeURIComponent(referenceId)}`);
                    } else if (referenceType === 'طلب صادر') {
                      navigate(`/orders/outbound/${encodeURIComponent(referenceId)}`);
                    } else if (referenceType === 'فاتورة') {
                      navigate(`/invoices/${encodeURIComponent(referenceId)}`);
                    } else if (referenceType === 'تقارير') {
                      navigate('/reports');
                    } else {
                      navigate('/dashboard');
                    }
                  }}
                />
              }
            />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </main>

      {/* Mobile Sidebar Overlay - shown when sidebar is open on small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default App;
