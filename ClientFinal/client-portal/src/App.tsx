import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import './App.css';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ArrowLeftRight,
  Search,
  Menu,
  X,
  ChevronDown,
  Power,
  Database,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LoginPage } from '@/components/LoginPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { InventoryPage } from '@/pages/InventoryPage';
import { OrdersPage } from '@/pages/OrdersPage';
import { CreateOrderPage } from '@/pages/CreateOrderPage';
import { OrderDetailsPage } from '@/pages/OrderDetailsPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { MasterDataPage } from '@/pages/MasterDataPage';
import { MovementsPage } from '@/pages/MovementsPage';
import { isAuthenticated, logout, getCurrentUser } from '@/lib/auth';
import type { UserInfo } from '@/lib/auth';
import { fetchClientSettings } from '@/api/clientPortalSettings';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'لوحة التحكم', active: true },
  { icon: Package, label: 'المخزون', active: false },
  { icon: Database, label: 'البيانات الأساسية', active: false },
  { icon: ShoppingCart, label: 'الطلبات', active: false },
  { icon: ArrowLeftRight, label: 'الحركات', active: false },
];

const labelToRoute: Record<string, string> = {
  'لوحة التحكم': '/dashboard',
  'المخزون': '/inventory',
  'البيانات الأساسية': '/master-data',
  'الطلبات': '/orders',
  'الحركات': '/movements',
};

function getActiveSidebarLabel(pathname: string): string {
  if (pathname.startsWith('/orders')) return 'الطلبات';
  if (pathname.startsWith('/dashboard')) return 'لوحة التحكم';
  if (pathname.startsWith('/inventory')) return 'المخزون';
  if (pathname.startsWith('/master-data')) return 'البيانات الأساسية';
  if (pathname.startsWith('/movements')) return 'الحركات';
  return 'لوحة التحكم';
}

type AuthContextValue = {
  authenticated: boolean;
  user: UserInfo | null;
  profileName: string | null;
  onLoginSuccess: () => Promise<void>;
  onLogout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function useClientPortalAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useClientPortalAuth must be used within AuthContext.Provider');
  return ctx;
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

function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authenticated, user, profileName, onLogout } = useClientPortalAuth();

  if (!authenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  );
  const activeItem = getActiveSidebarLabel(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      <aside
        className={`fixed right-0 top-0 h-full bg-white border-l border-gray-200 z-50 transition-all duration-300 w-64 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#176C33] to-[#104920] rounded-xl flex items-center justify-center shadow-lg shadow-[#176C33]/25">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">مخزني</span>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3 sm:p-4 space-y-1 overflow-y-auto h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)]">
          {sidebarItems.map((item) => (
            <button
              type="button"
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

      <main className="flex-1 transition-all duration-300 min-w-0 mr-0 lg:mr-64">
        <header className="h-14 sm:h-16 bg-white border-b border-gray-200 sticky top-0 z-40 px-4 sm:px-6 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <button
              type="button"
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-200 hover:opacity-80 transition-opacity"
                >
                  <Avatar className="w-9 h-9 border-2 border-[#176C33]/20">
                    <AvatarFallback className="bg-gradient-to-br from-[#176C33] to-[#104920] text-white text-sm font-medium">
                      {profileName ? profileName.charAt(0) : user?.role ? user.role.charAt(0) : 'ع'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-medium text-gray-900">{user?.role || 'عميل'}</p>
                    <p className="text-xs text-gray-500">{profileName || 'حساب عميل'}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={onLogout} className="text-red-600 cursor-pointer">
                  <Power className="w-4 h-4 ml-2" />
                  تسجيل الخروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-x-hidden">
          <Outlet />
        </div>
      </main>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
          role="presentation"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function AppRoutes() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [profileName, setProfileName] = useState<string | null>(null);

  const refreshProfile = useCallback(async () => {
    try {
      const settings = await fetchClientSettings();
      setProfileName(
        [settings.profile.firstName, settings.profile.lastName].filter(Boolean).join(' ') || null
      );
    } catch {
      setProfileName(null);
    }
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          const userInfo = await getCurrentUser();
          if (userInfo) {
            setUser(userInfo);
            setAuthenticated(true);
            await refreshProfile();
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
    void checkAuth();
  }, [refreshProfile]);

  const onLoginSuccess = useCallback(async () => {
    const userInfo = await getCurrentUser();
    if (userInfo) {
      setUser(userInfo);
      setAuthenticated(true);
      await refreshProfile();
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, refreshProfile]);

  const onLogout = useCallback(() => {
    logout();
    setAuthenticated(false);
    setUser(null);
    setProfileName(null);
    navigate('/login', { replace: true });
  }, [navigate]);

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">جاري التحقق من الهوية...</p>
        </div>
      </div>
    );
  }

  const authValue: AuthContextValue = {
    authenticated,
    user,
    profileName,
    onLoginSuccess,
    onLogout,
  };

  return (
    <AuthContext.Provider value={authValue}>
      <Routes>
        <Route
          path="/login"
          element={
            authenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage onLoginSuccess={onLoginSuccess} />
            )
          }
        />

        <Route element={<AuthLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
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

          <Route path="/notifications" element={<Navigate to="/dashboard" replace />} />
          <Route path="/settings" element={<Navigate to="/dashboard" replace />} />
          <Route path="/users" element={<Navigate to="/dashboard" replace />} />
          <Route path="/invoices" element={<Navigate to="/dashboard" replace />} />
          <Route path="/invoices/:invoiceId" element={<Navigate to="/dashboard" replace />} />
          <Route path="/billing" element={<Navigate to="/dashboard" replace />} />
          <Route path="/reports" element={<Navigate to="/dashboard" replace />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>

        <Route path="*" element={<Navigate to={authenticated ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default function App() {
  return <AppRoutes />;
}
